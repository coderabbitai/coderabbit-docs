---
title: Add review instructions
description:
  CodeRabbit offers various customization options to tailor the reviews to your
  specific requirements. Customizations can be made using one of the below
  options.
---

The guide explains how to add custom review instructions for the entire project.
Also, see the guide on how to [configure CodeRabbit](/getting-started/configure-coderabbit).

## Path-based instructions {#path-based}

This section explains how to add custom code review instructions for the entire
project or specific file paths in your project using glob patterns. Developers
can provide tailored review guidelines based on the file paths. These
instructions are needed only if you want CodeRabbit to follow specific
instructions besides the standard review.

> For example, you may want to enforce a style guide by file types or directories.

### Sample Usage

:::note

Paths accept glob patterns. See the
[minimatch](https://github.com/isaacs/minimatch) documentation for more
information.

:::

```yaml
#...
reviews:
  #...
  path_instructions:
    - path: "**/*.js"
      instructions: |
        Review the JavaScript code against the Google JavaScript style guide and point out any mismatches
    - path: "tests/**.*"
      instructions: |
        Review the following unit test code written using the Mocha test library. Ensure that:
        - The code adheres to best practices associated with Mocha.
        - Descriptive test names are used to clearly convey the intent of each test.
```

## Abstract Syntax Tree (AST) based instructions {#ast-based}

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit offers review instructions based on Abstract Syntax Tree (AST)
patterns. Under the hood, CodeRabbit uses
[`ast-grep`](https://ast-grep.github.io) to power this feature. `ast-grep` is
written in Rust and uses the tree-sitter parser to generate the AST for popular
languages. `ast-grep` is written and maintained by
[Herrington Darkholme](https://twitter.com/hd_nvim).

:::tip

`ast-grep` Playground is quite effective in designing and testing AST rules on
source code snippets. You can access the playground
[here](https://ast-grep.github.io/playground.html).

:::

:::note

The additional context provided by this feature is only available during the
automated code review process, and it's not available in the chat.

Moreover, this feature is only recommended for advanced users as there is a
learning curve involved.

:::

:::note

**Deep dive into AST patterns and `ast-grep` rules**

- Abstract Syntax Tree (AST)
  [Wikipedia article](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
- `ast-grep`
  [official documentation](https://ast-grep.github.io/guide/rule-config.html)
  for detailed guides.

:::

This section explains how to add custom code review instructions using
`ast-grep` rules. `ast-grep` is a tool used for searching code using abstract
syntax trees (AST) patterns.

By default, you can add `ast-grep` rules by following these steps:

1. Create a directory that keeps all the `ast-grep` rules in your project
   directory.
2. Add individual `.yaml` files for each `ast-grep` rule within the newly
   created directory.
3. Ensure that each `.yaml` file contains the necessary `ast-grep` rule
   configurations.
4. Ensure that all rules contains a `message` property, that will be used in the
   review process.
5. Add the rules' directory to the `.coderabbit.yml` file under `tools.ast-grep`
   configuration.
6. Optionally, you can add `packages` property to the configuration to specify
   the packages that should be installed before running the `ast-grep` tool.
   Please read the `packages` section for detailed information.

```yaml
#...
reviews:
  #...
  tools:
    ast-grep:
      essential_rules: true # option to enable essential security rules
      rule_dirs:
        - "custom-name"
      packages:
        - "myorg/myawesomepackage" # custom package name following the format organization/repository
  #...
```

### The rule object

Rule object is the core concept of `ast-grep` rule system and every other
feature is built on top of it.

Below is the full list of fields in a rule object. Every rule field is optional
and can be omitted, but at least one field should be present in a rule. A node
will match a rule if and only if it satisfies all fields in the rule object.

```yaml
rule:
  # atomic rule
  pattern: "search.pattern"
  kind: "tree_sitter_node_kind"
  regex: "rust|regex"
  # relational rule
  inside: { pattern: "sub.rule" }
  has: { kind: "sub_rule" }
  follows: { regex: "can|use|any" }
  precedes: { kind: "multi_keys", pattern: "in.sub" }
  # composite rule
  all: [{ pattern: "match.all" }, { kind: "match_all" }]
  any: [{ pattern: "match.any" }, { kind: "match_any" }]
  not: { pattern: "not.this" }
  matches: "utility-rule"
```

### Rule Categories

To summarize the rule object fields above, we have three categories of rules:

- **Atomic Rule:** the most basic rule that checks if AST nodes matches.
- **Relational Rule:** rules that check if a node is surrounded by another node.
- **Composite Rule:** rules that combine sub-rules together using logical
  operators.

These three categories of rules can be composed together to create more complex
rules.

The rule object is inspired by the CSS selectors but with more composability and
expressiveness. Thinking about how selectors in CSS works can help you
understand the rule object!

> Read `ast-grep` >
> [documentation](https://ast-grep.github.io/guide/rule-config.html) for
> detailed guides.

#### Atomic rule

Atomic rule defines the most basic matching rule that determines whether one
syntax node matches the rule or not. There are three kinds of atomic rule:
`pattern`, `kind` and `regex`.

> Official documentation guide on
> [Atomic Rule](https://ast-grep.github.io/guide/rule-config/atomic-rule.html)

#### Relational rule

A relational rule defines the relationship between two syntax nodes. There are
four kinds of relational rule: `inside`, `has`, `follows` and `precedes`.

All four relational rules accept a sub-rule object as their value. The sub-rule
will match the surrounding node, while the relational rule itself will match the
target node.

> Official documentation guide on
> [Relational Rule](https://ast-grep.github.io/guide/rule-config/relational-rule.html)

```yaml
rule:
  pattern: await $PROMISE
  inside:
    kind: for_in_statement
    stopBy: end
```

#### Composite rule

A composite rule defines the logical relationship between multiple sub-rules.
There are three kinds of composite rule: `all`, `any` and `not`.

**`all`**

The `all` rule matches if all sub-rules match.

```yaml
rule:
  all:
    - pattern: console.log('Hello World');
    - kind: expression_statement
```

**`any`**

`any` rule matches if any sub-rule matches.

```yaml
rule:
  any:
    - pattern: var a = $A
    - pattern: const a = $A
    - pattern: let a = $A
```

**`not`**

`not` applies negation to a sub-rule. It matches if the sub-rule does not match.

```yaml
rule:
  pattern: console.log($GREETING)
  not:
    pattern: console.log('Hello World')
```

> Official documentation guide on
> [Composite Rule](https://ast-grep.github.io/guide/rule-config/composite-rule.html)

### Reusing rule as utility

`ast-grep` chooses to use YAML for rule representation. While this decision
makes writing rules easier, it does impose some limitations on the rule
authoring. One of the limitations is that rule objects cannot be reused.

#### Local utility rule

Local utility rules are defined in the utils field of the config file. Utils is
a string-keyed dictionary.

For example, the following config file defines a local utility rule
`is-literal`:

```yaml
utils:
  is-literal:
    any:
      - kind: string
      - kind: number
      - kind: boolean
rule:
  matches: is-literal
```

#### Global utility rule

Global utility rules are defined in a separate file. But they are available
across all rule configurations in the project.

To create global utility rules, you need to have the `rules` directory created
on the root of your project and another `utils` directory inside the root of
your project.

```yaml
my-awesome-project   # project root
  |- rules           # rule directory
  | |- my-rule.yml
  |- utils           # utils directory
  | |- is-literal.yml
```

> Also, you need to add the `rules` and `utils` directories to the
> `.coderabbit.yml` file under `tools.ast-grep` configuration. The rules can
> also be inside a package. If you have a package that contains rules, you can
> add the package name to the `packages` field in the `.coderabbit.yml` file.

```yaml
#...
reviews:
  #...
  tools:
    ast-grep:
      essential_rules: true
      rule_dirs:
        - "rules"
      util_dirs:
        - "utils"
      packages:
        - "my-awesome-org/my-awesome-package" # public repository that contains ast-grep rules
  #...
```

```yaml
# is-literal.yml
id: is-literal
language: TypeScript
rule:
  any:
    - kind: "false"
    - kind: undefined
    - kind: "null"
    - kind: "true"
    - kind: regex
    - kind: number
    - kind: string
```

> Official documentation guide on
> [Utility Rule](https://ast-grep.github.io/guide/rule-config/utility-rule.html)

### Packages

A package is what allows you to share rules across multiple projects.
Essentially, a package is a collection of `ast-grep` rules.

CodeRabbit provides a set of packages that you can use out of the box. You can
also create your own packages and share them with the community or just use them
within your organization.

Packages provided by CodeRabbit are:

- `ast-grep-essentials`: A set of essential security rules. Because we value
  security, this package gets its own property in the `.coderabbit.yml` file, to
  make it easier to install and not overwrite. Check the
  [package repository](https://github.com/coderabbitai/ast-grep-essentials) for
  more information.

To use a package, you need to add the package name to the `packages` field in
the `.coderabbit.yml` file.

```yaml
#...
reviews:
  #...
  tools:
    ast-grep:
      essential_rules: true
      packages: # list of packages to install, in future coderabbit will provide a set of packages, beside the essentials one.
        - "my-awesome-org/my-awesome-package" # custom package name following the format organization/repository
  #...
```

#### Using custom package

Let's say that you have a public repository that contains `ast-grep` rules. You
can add the package name to the `packages` field in the `.coderabbit.yml` file.

Requirements for a package:

- It should be a public repository
- It contains rules that follow the `ast-grep` rule format
- It has the following folder structure:

  ```text
  my-awesome-project   # project root
    |- rules           # rule directory
    | |- my-rule.yml
    |- utils           # utils directory
    | |- is-literal.yml
  ```

  `rules` and `utils` directories are keywords, and it should be the same.
  Inside each directory, the structure is up to you. You can also have any other
  root directories or files beside the two shown above.

- Name should be in the format `organization/repository`

```yaml
#...
reviews:
  #...
  tools:
    ast-grep:
      packages:
        - "my-awesome-org/my-awesome-package"
  #...
```

### Multiple Languages Support

CodeRabbit supports multiple programming languages for defining `ast-grep`
rules.

- JavaScript
- Typescript
- C#
- Golang
- Java
- Kotlin
- Rust
- Python
- C

Below are examples of `ast-grep` rules in different languages:

#### JavaScript

##### Importing files without an extension is not allowed

```yaml
id: find-import-file
language: js
message: "Importing files without an extension is not allowed"
rule:
  regex: "/[^.]+[^/]$"
  kind: string_fragment
  any:
    - inside:
        stopBy: end
        kind: import_statement
    - inside:
        stopBy: end
        kind: call_expression
        has:
          field: function
          regex: "^import$"
```

##### No console.log allowed except `console.error` on the catch block

```yaml
id: no-console-except-error
language: typescript
message: "No console.log allowed except console.error on the catch block"
rule:
  any:
    - pattern: console.error($$$)
      not:
        inside:
          kind: catch_clause
          stopBy: end
    - pattern: console.$METHOD($$$)
constraints:
  METHOD:
    regex: "log|debug|warn"
```

#### C

In C, there is no built-in support for object-oriented programming, but some
programmers use structs and function pointers to simulate classes and methods.

However, this style can have some drawbacks, such as:

- Extra memory allocation and reallocation for the struct and the function
  pointer.
- Indirection overhead when calling the function pointer.

A possible alternative is to use a plain function call with the struct pointer
as the first argument.

```yaml
id: method_receiver
language: c
rule:
  pattern: $R.$METHOD($$$ARGS)
transform:
  MAYBE_COMMA:
    replace:
      source: $$$ARGS
      replace: "^.+"
      by: ", "
fix: $METHOD(&$R$MAYBE_COMMA$$$ARGS)
```
