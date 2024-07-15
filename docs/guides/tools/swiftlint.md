---
title: SwiftLint
sidebar_label: SwiftLint
description: CodeRabbit's guide to SwiftLint.
sidebar_position: 7
---

[SwiftLint](https://realm.github.io/SwiftLint/) is a linter for Swift.

## Files

SwiftLint will run on files with the following extensions:

- `.swift`

## Configuration

Ruff supports the following config files:

- `.swiftlint.yaml`
- `.swiftlint.yml`
- User-defined config file set at `reviews.tools.swiftlint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → SwiftLint → Config File" field in CodeRabbit's settings page.

CodeRabbit will use the following settings if no config file is found:

```yaml
disabled_rules:
  - closure_body_length
  - cyclomatic_complexity
  - enum_case_associated_values_count
  - file_length
  - function_body_length
  - function_parameter_count
  - large_tuple
  - line_length
  - nesting
  - type_body_length
  - attributes
  - closing_brace
  - closure_end_indentation
  - closure_parameter_position
  - closure_spacing
  - collection_alignment
  - colon
  - comma
  - comma_inheritance
  - computed_accessors_order
  - conditional_returns_on_newline
  - control_statement
  - custom_rules
  - direct_return
  - empty_enum_arguments
  - empty_parameters
  - empty_parentheses_with_trailing_closure
  - explicit_self
  - file_header
  - file_types_order
  - identifier_name
  - implicit_getter
  - implicit_return
  - inclusive_language
  - indentation_width
  - leading_whitespace
  - let_var_whitespace
  - literal_expression_end_indentation
  - modifier_order
  - multiline_arguments
  - multiline_arguments_brackets
  - multiline_function_chains
  - multiline_literal_brackets
  - multiline_parameters
  - multiline_parameters_brackets
  - multiple_closures_with_trailing_closure
  - no_space_in_method_call
  - non_overridable_class_declaration
  - number_separator
  - opening_brace
  - operator_usage_whitespace
  - operator_whitespace
  - optional_enum_case_matching
  - period_spacing
  - prefer_self_in_static_references
  - prefer_self_type_over_type_of_self
  - prefixed_toplevel_constant
  - protocol_property_accessors_order
  - redundant_discardable_let
  - redundant_self_in_closure
  - return_arrow_whitespace
  - self_binding
  - shorthand_argument
  - shorthand_operator
  - single_test_class
  - sorted_enum_cases
  - sorted_imports
  - statement_position
  - superfluous_else
  - switch_case_alignment
  - switch_case_on_newline
  - trailing_closure
  - trailing_comma
  - trailing_newline
  - trailing_whitespace
  - type_contents_order
  - unneeded_parentheses_in_closure_argument
  - unused_optional_binding
  - vertical_parameter_alignment
  - vertical_parameter_alignment_on_call
  - vertical_whitespace
  - vertical_whitespace_between_cases
  - vertical_whitespace_closing_braces
  - vertical_whitespace_opening_braces
  - void_return
```

## Links

- [SwiftLint Configuration](https://github.com/realm/SwiftLint?tab=readme-ov-file#configuration)
