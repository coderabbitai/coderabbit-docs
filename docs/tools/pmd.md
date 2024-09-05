---
title: PMD
sidebar_label: PMD
description: CodeRabbit's guide to PMD.
---

[PMD](https://pmd.github.io/) is an extensible multilanguage static code analyzer. It’s mainly concerned with Java.

## Files

PMD will run on files with the following extensions:

- `.java`

## Configuration

PMD uses an XML configuration file.

PMD supports the following config files:

- User-defined config file set at `reviews.tools.pmd.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → PMD → Config File" field in CodeRabbit's settings page.

- If no user-defined config file is found, we look for the following config file in the repo:
  - `ruleset.xml`

## Links

- [PMD Configuring rules](https://pmd.github.io/pmd/pmd_userdocs_configuring_rules.html)
