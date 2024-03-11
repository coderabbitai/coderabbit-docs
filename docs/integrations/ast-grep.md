---
title: Ast-Grep rules in CodeRabbit 
description: Integrate Ast-Grep rules with CodeRabbit
sidebar_label: Ast-Grep
image: "/preview_meta.jpg"
---

<head>
 <meta charSet="utf-8" />
  <meta name="title" content="CodeRabbit integration with ast-grep rules" />
  <meta name="description" content="Integrate ast-grep in CodeRabbit on your own repository" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://coderabbit.ai/" />
  <meta property="og:title" content="CodeRabbit integration with ast-grep rules" />
  <meta property="og:description" content="CodeRabbit: AI-powered Code Reviews" />
  <meta property="og:image" content="/preview_meta.jpg" />

  <meta name="twitter:image" content="https://coderabbit.ai/preview_meta.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CodeRabbit integration with ast-grep rules" />
  <meta name="twitter:description" content="CodeRabbit: AI-powered Code Reviews" />
</head>

This documentation provides guidance on integrating AST-Grep rules within the CodeRabbit platform. AST-Grep is a tool used for searching code using abstract syntax trees (AST) patterns.

### **Setting up AST-Grep rules**
By default, users can add AST-Grep rules by following these steps:

1. Create a folder that keeps all the `custom-name` in your project directory.
2. Add individual `.yaml` files for each AST-Grep rule within the `custom-name` folder.
3. Ensure each `.yaml` file contains the necessary AST-Grep rule configurations.
4. Ensure that all rules contains a `message` property, that will be used in the review process.
5. Add the `custom-name` folder to the `.code-rabbit.yml` file under `tools.ast_grep` configuration.
```yaml
#...
reviews:
  #...
  tools:
    ast_grep:
      rules_folder: "custom-name"
  #...
```

### **The rule object**

Rule object is the core concept of ast-grep's rule system and every other features are built on top of it.

Below is the full list of fields in a rule object. Every rule field is optional and can be omitted but at least one field should be present in a rule. A node will match a rule if and only if it satisfies all fields in the rule object.
```yaml
rule:
  # atomic rule
  pattern: 'search.pattern'
  kind: 'tree_sitter_node_kind'
  regex: 'rust|regex'
  # relational rule
  inside: { pattern: 'sub.rule' }
  has: { kind: 'sub_rule' }
  follows: { regex: 'can|use|any' }
  precedes: { kind: 'multi_keys', pattern: 'in.sub' }
  # composite rule
  all: [ {pattern: 'match.all'}, {kind: 'match_all'} ]
  any: [ {pattern: 'match.any'}, {kind: 'match_any'} ]
  not: { pattern: 'not.this' }
  matches: 'utility-rule'
```

### **Three Rule Categories**
To summarize the rule object fields above, we have three categories of rules:

- Atomic Rule: the most basic rule that checks if AST nodes matches.
- Relational Rule: rules that check if a node is surrounded by another node.
- Composite Rule: rules that combine sub-rules together using logical operators.

These three categories of rules can be composed together to create more complex rules.

The rule object is inspired by the CSS selectors but with more composability and expressiveness. Think about how selectors in CSS works can help you understand the rule object!

> Read ast-grep [documentation](https://ast-grep.github.io/guide/rule-config.html) for detailed guides.

#### **Atomic rule**
Atomic rule defines the most basic matching rule that determines whether one syntax node matches the rule or not. There are three kinds of atomic rule: `pattern`, `kind` and `regex`.

> Official documentation guide on [Atomic Rule](https://ast-grep.github.io/guide/rule-config/atomic-rule.html)

#### **Relational rule**
Relational rule defines the relationship between two syntax nodes. There are four kinds of relational rule: `inside`, `has`, `follows` and `precedes`.

All four relational rules accept a sub-rule object as their value. The sub-rule will match the surrounding node while the relational rule itself will match the target node.

> Official documentation guide on [Relational Rule](https://ast-grep.github.io/guide/rule-config/relational-rule.html)

```yaml
rule:
  pattern: await $PROMISE
  inside:
    kind: for_in_statement
    stopBy: end
```

#### **Composite rule**
Composite rule defines the logical relationship between multiple sub-rules. There are three kinds of composite rule: `all`, `any` and `not`.

**all**

The `all` rule matches if all sub-rules match.
```yaml
rule:
  all:
    - pattern: console.log('Hello World');
    - kind: expression_statement
```

**any**

`any` rule matches if any sub-rule matches.
```yaml
rule:
  any:
    - pattern: var a = $A
    - pattern: const a = $A
    - pattern: let a = $A
```

**not**

`not` applies negation to a sub-rule. It matches if the sub-rule does not match.

```yaml
rule:
  pattern: console.log($GREETING)
  not:
    pattern: console.log('Hello World')
```

> Official documentation guide on [Composite Rule](https://ast-grep.github.io/guide/rule-config/composite-rule.html)


## Reusing rule as utility
ast-grep chooses to use YAML for rule representation. While this decision makes writing rules easier, it does impose some limitations on the rule authoring. One of the limitations is that rule objects cannot be reused.

#### **Local utility rule**
Local utility rules are defined in the utils field of the config file. utils is a string-keyed dictionary.

For example, the following config file defines a local utility rule `is-literal`:

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

#### **Global utility rule**
Global utility rules are defined in a separate file. But they are available across all rule configurations in the project.

To create global utility rules, you need to have the `rules` folder created on the root of your project and another
`utils` directory inside the root of your project.

```yaml
my-awesome-project   # project root
  |- rules           # rule directory
  | |- my-rule.yml
  |- utils           # utils directory
  | |- is-literal.yml
```

>Also, you need to add the `rules` and `utils` folders to the `.code-rabbit.yml` file under `tools.ast_grep` configuration.

```yaml
#...
reviews:
  #...
  tools:
    ast_grep:
      rules_folder: "rules"
      utils_folder: "utils"
  #...
```

```yaml
# is-literal.yml
id: is-literal
language: TypeScript
rule:
  any:
    - kind: 'false'
    - kind: undefined
    - kind: 'null'
    - kind: 'true'
    - kind: regex
    - kind: number
    - kind: string
```

> Official documentation guide on [Utility Rule](https://ast-grep.github.io/guide/rule-config/utility-rule.html)

## Multiple Languages Support

CodeRabbit supports multiple programming languages for defining AST-Grep rules.

- JavaScript
- Typescript
- C#
- Golang
- Java
- Kotlin
- Rust
- Python
- C

Below are examples of AST-Grep rules in different languages:

### **JavaScript**
#### Importing files without an extension is not allowed
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

#### No console.log allowed except console.error on the catch block
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
    regex: 'log|debug|warn'
```

### **C**
In C, there is no built-in support for object-oriented programming, but some programmers use structs and function pointers to simulate classes and methods. 

However, this style can have some drawbacks, such as:
- extra memory allocation and reallocation for the struct and the function pointer.
- indirection overhead when calling the function pointer.
 
A possible alternative is to use a plain function call with the struct pointer as the first argument.

```yaml
id: method_receiver
language: c
rule:
  pattern: $R.$METHOD($$$ARGS)
transform:
  MAYBE_COMMA:
    replace:
      source: $$$ARGS
      replace: '^.+'
      by: ', '
fix:
  $METHOD(&$R$MAYBE_COMMA$$$ARGS)
```
