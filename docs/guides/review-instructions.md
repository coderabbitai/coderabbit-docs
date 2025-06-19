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

### Default Blocked Paths

By default, CodeRabbit blocks certain file paths and extensions from being reviewed. If you want CodeRabbit to review any of these blocked paths, you can explicitly include them in your Path Filters configuration.

<details>
<summary>View complete list of default blocked paths</summary>

The following paths are blocked by default, grouped by category:

#### Build and Dependency Directories

| Path Pattern          | Description                |
| --------------------- | -------------------------- |
| `!**/dist/**`         | Build output directory     |
| `!**/node_modules/**` | Node.js dependencies       |
| `!**/.svelte-kit/**`  | SvelteKit build directory  |
| `!**/.webpack/**`     | Webpack build directory    |
| `!**/.yarn/**`        | Yarn cache directory       |
| `!**/.docusaurus/**`  | Docusaurus build directory |
| `!**/.temp/**`        | Temporary files directory  |
| `!**/.cache/**`       | Cache directory            |
| `!**/.next/**`        | Next.js build directory    |
| `!**/.nuxt/**`        | Nuxt.js build directory    |

#### Lock Files

| Path Pattern            | Description        |
| ----------------------- | ------------------ |
| `!**/package-lock.json` | npm lock file      |
| `!**/yarn.lock`         | Yarn lock file     |
| `!**/pnpm-lock.yaml`    | pnpm lock file     |
| `!**/bun.lockb`         | Bun lock file      |
| `!**/*.lock`            | Generic lock files |

#### Generated Code

| Path Pattern           | Description                            |
| ---------------------- | -------------------------------------- |
| `!**/generated/**`     | Generated code directory               |
| `!**/@generated/**`    | Generated code directory (alternative) |
| `!**/__generated__/**` | Generated code directory (alternative) |
| `!**/__generated/**`   | Generated code directory (alternative) |
| `!**/_generated/**`    | Generated code directory (alternative) |
| `!**/gen/**`           | Generated code directory (alternative) |
| `!**/@gen/**`          | Generated code directory (alternative) |
| `!**/__gen__/**`       | Generated code directory (alternative) |
| `!**/__gen/**`         | Generated code directory (alternative) |
| `!**/_gen/**`          | Generated code directory (alternative) |

#### Binary and Compiled Files

| Path Pattern  | Description             |
| ------------- | ----------------------- |
| `!**/*.app`   | Application bundle      |
| `!**/*.bin`   | Binary file             |
| `!**/*.class` | Java compiled class     |
| `!**/*.dll`   | Windows dynamic library |
| `!**/*.dylib` | macOS dynamic library   |
| `!**/*.exe`   | Windows executable      |
| `!**/*.o`     | Object file             |
| `!**/*.so`    | Shared object file      |
| `!**/*.wasm`  | WebAssembly file        |

#### Archives and Compressed Files

| Path Pattern | Description             |
| ------------ | ----------------------- |
| `!**/*.bz2`  | Bzip2 archive           |
| `!**/*.gz`   | Gzip archive            |
| `!**/*.xz`   | XZ archive              |
| `!**/*.zip`  | ZIP archive             |
| `!**/*.7z`   | 7-Zip archive           |
| `!**/*.rar`  | RAR archive             |
| `!**/*.zst`  | Zstandard archive       |
| `!**/*.tar`  | TAR archive             |
| `!**/*.jar`  | Java archive            |
| `!**/*.war`  | Web application archive |
| `!**/*.nar`  | NAR archive             |

#### Media Files

| Path Pattern | Description     |
| ------------ | --------------- |
| `!**/*.mp3`  | MP3 audio       |
| `!**/*.wav`  | WAV audio       |
| `!**/*.wma`  | WMA audio       |
| `!**/*.mp4`  | MP4 video       |
| `!**/*.avi`  | AVI video       |
| `!**/*.mkv`  | MKV video       |
| `!**/*.wmv`  | WMV video       |
| `!**/*.m4a`  | M4A audio       |
| `!**/*.m4v`  | M4V video       |
| `!**/*.3gp`  | 3GP video       |
| `!**/*.3g2`  | 3G2 video       |
| `!**/*.rm`   | RealMedia video |
| `!**/*.mov`  | QuickTime video |
| `!**/*.flv`  | Flash video     |
| `!**/*.swf`  | Flash animation |
| `!**/*.flac` | FLAC audio      |
| `!**/*.ogg`  | OGG audio       |

#### Images and Fonts

| Path Pattern  | Description            |
| ------------- | ---------------------- |
| `!**/*.ico`   | Icon file              |
| `!**/*.svg`   | SVG image              |
| `!**/*.jpeg`  | JPEG image             |
| `!**/*.jpg`   | JPEG image             |
| `!**/*.png`   | PNG image              |
| `!**/*.gif`   | GIF image              |
| `!**/*.bmp`   | BMP image              |
| `!**/*.tiff`  | TIFF image             |
| `!**/*.webm`  | WebM image             |
| `!**/*.ttf`   | TrueType font          |
| `!**/*.otf`   | OpenType font          |
| `!**/*.woff`  | Web Open Font Format   |
| `!**/*.woff2` | Web Open Font Format 2 |
| `!**/*.eot`   | Embedded OpenType font |

#### Documents and Data Files

| Path Pattern    | Description             |
| --------------- | ----------------------- |
| `!**/*.pdf`     | PDF document            |
| `!**/*.doc`     | Word document           |
| `!**/*.docx`    | Word document           |
| `!**/*.xls`     | Excel spreadsheet       |
| `!**/*.xlsx`    | Excel spreadsheet       |
| `!**/*.ppt`     | PowerPoint presentation |
| `!**/*.pptx`    | PowerPoint presentation |
| `!**/*.csv`     | CSV data file           |
| `!**/*.tsv`     | TSV data file           |
| `!**/*.dat`     | Data file               |
| `!**/*.db`      | Database file           |
| `!**/*.parquet` | Parquet data file       |

#### Development and System Files

| Path Pattern         | Description         |
| -------------------- | ------------------- |
| `!**/tags`           | Tags file           |
| `!**/.tags`          | Tags file           |
| `!**/TAGS`           | Tags file           |
| `!**/.TAGS`          | Tags file           |
| `!**/.DS_Store`      | macOS system file   |
| `!**/.cscope.files`  | Cscope files        |
| `!**/.cscope.out`    | Cscope output       |
| `!**/.cscope.in.out` | Cscope input/output |
| `!**/.cscope.po.out` | Cscope output       |
| `!**/*.log`          | Log file            |
| `!**/*.map`          | Source map          |
| `!**/*.out`          | Output file         |
| `!**/*.sum`          | Checksum file       |
| `!**/*.work`         | Work file           |
| `!**/*.md5sum`       | MD5 checksum file   |

#### Game and 3D Assets

| Path Pattern        | Description            |
| ------------------- | ---------------------- |
| `!**/*.tga`         | Targa image            |
| `!**/*.dds`         | DirectDraw surface     |
| `!**/*.psd`         | Photoshop document     |
| `!**/*.fbx`         | FBX 3D model           |
| `!**/*.obj`         | OBJ 3D model           |
| `!**/*.blend`       | Blender file           |
| `!**/*.dae`         | COLLADA 3D model       |
| `!**/*.gltf`        | GL Transmission Format |
| `!**/*.hlsl`        | HLSL shader            |
| `!**/*.glsl`        | GLSL shader            |
| `!**/*.unity`       | Unity scene            |
| `!**/*.umap`        | Unreal map             |
| `!**/*.prefab`      | Unity prefab           |
| `!**/*.mat`         | Material file          |
| `!**/*.shader`      | Shader file            |
| `!**/*.shadergraph` | Shader graph           |
| `!**/*.sav`         | Save file              |
| `!**/*.scene`       | Scene file             |
| `!**/*.asset`       | Asset file             |

#### Python-specific Files

| Path Pattern   | Description           |
| -------------- | --------------------- |
| `!**/*.pyc`    | Python compiled file  |
| `!**/*.pyd`    | Python dynamic module |
| `!**/*.pyo`    | Python optimized file |
| `!**/*.pkl`    | Python pickle file    |
| `!**/*.pickle` | Python pickle file    |

#### Go-specific Files

| Path Pattern     | Description                     |
| ---------------- | ------------------------------- |
| `!**/*.pb.go`    | Protocol buffer Go file         |
| `!**/*.pb.gw.go` | Protocol buffer gateway Go file |

#### Terraform Files

| Path Pattern           | Description            |
| ---------------------- | ---------------------- |
| `!**/*.tfstate`        | Terraform state file   |
| `!**/*.tfstate.backup` | Terraform state backup |

#### Minified Files

| Path Pattern       | Description                    |
| ------------------ | ------------------------------ |
| `!**/*.min.js`     | Minified JavaScript            |
| `!**/*.min.js.map` | Minified JavaScript source map |
| `!**/*.min.js.css` | Minified CSS                   |

</details>

You can also edit your path filters directly in the UI by navigating to: **Configuration** > **Review** > **Settings** > **Path Filters**

<img src="/img/guides/path-filters.png" width="600" alt="CircleCI Integration" />

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
