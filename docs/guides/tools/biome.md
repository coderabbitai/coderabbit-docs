---
title: Biome
sidebar_label: Biome
description: CodeRabbit's guide to Biome.
---

[Biome](https://biomejs.dev/) is a linter for JavaScript, TypeScript, JSX, TSX, JSON, JSONC, CSS.

## Files

Biome will run on files with the following extensions:

- `.js`
- `.ts`
- `.cjs`
- `.mjs`
- `.d.cts`
- `.d.mts`
- `.jsx`
- `.tsx`
- `.json`
- `.jsonc`
- `.css`

## Configuration

Biome supports the following config files:

- `biome.jsonc`
- `biome.json`

CodeRabbit will use the following settings based on the profile selected if no config file is found:

### Chill

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": {
    "enabled": false
  },
  "formatter": {
    "enabled": false
  },
  "linter": {
    "enabled": true,
    "rules": {
      "all": false,
      "recommended": true,
      "a11y": {
        "recommended": false
      },
      "correctness": {
        "useExhaustiveDependencies": "off",
        "noInnerDeclarations": "off"
      },
      "style": {
        "recommended": false,
        "noArguments": "warn",
        "noCommaOperator": "warn",
        "noUselessElse": "warn",
        "useAsConstAssertion": "off",
        "useBlockStatements": "off",
        "useConsistentArrayType": "off",
        "useDefaultParameterLast": "warn",
        "useEnumInitializers": "off",
        "useExponentiationOperator": "warn",
        "useExportType": "off",
        "useFragmentSyntax": "off",
        "useImportType": "off",
        "useLiteralEnumMembers": "warn",
        "useShorthandArrayType": "off",
        "noUnusedTemplateLiteral": "off"
      },
      "complexity": {
        "noForEach": "off",
        "noExcessiveCognitiveComplexity": {
          "level": "off",
          "options": {
            "maxAllowedComplexity": 25
          }
        },
        "useLiteralKeys": "off",
        "useArrowFunction": "off",
        "useFlatMap": "off"
      },
      "suspicious": {
        "noArrayIndexKey": "off",
        "noExplicitAny": "off",
        "noImplicitAnyLet": "off",
        "noDoubleEquals": "off"
      },
      "nursery": {
        "all": false
      }
    }
  },
  "css": {
    "linter": {
      "enabled": true
    },
    "parser": {
      "cssModules": true
    }
  },
  "javascript": {
    "parser": {
      "unsafeParameterDecoratorsEnabled": true
    }
  }
}
```

### Assertive

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": {
    "enabled": false
  },
  "formatter": {
    "enabled": false
  },
  "linter": {
    "enabled": true,
    "rules": {
      "all": false,
      "recommended": true,
      "a11y": {
        "recommended": ""
      },
      "correctness": {
        "useExhaustiveDependencies": "off",
        "noInnerDeclarations": "warn"
      },
      "style": {
        "recommended": true,
        "noArguments": "warn",
        "noCommaOperator": "warn",
        "noUselessElse": "warn",
        "useAsConstAssertion": "off",
        "useBlockStatements": "off",
        "useConsistentArrayType": "off",
        "useDefaultParameterLast": "warn",
        "useEnumInitializers": "off",
        "useExponentiationOperator": "warn",
        "useExportType": "off",
        "useFragmentSyntax": "off",
        "useImportType": "off",
        "useLiteralEnumMembers": "warn",
        "useShorthandArrayType": "off",
        "noUnusedTemplateLiteral": "off"
      },
      "complexity": {
        "noForEach": "off",
        "noExcessiveCognitiveComplexity": {
          "level": "warn",
          "options": {
            "maxAllowedComplexity": 25
          }
        },
        "useLiteralKeys": "off",
        "useArrowFunction": "",
        "useFlatMap": ""
      },
      "suspicious": {
        "noArrayIndexKey": "",
        "noExplicitAny": "",
        "noImplicitAnyLet": "",
        "noDoubleEquals": ""
      },
      "nursery": {
        "all": false
      }
    }
  },
  "css": {
    "linter": {
      "enabled": true
    },
    "parser": {
      "cssModules": true
    }
  },
  "javascript": {
    "parser": {
      "unsafeParameterDecoratorsEnabled": true
    }
  }
}

```

## Links

- [Biome Configuration](https://biomejs.dev/reference/configuration/)
