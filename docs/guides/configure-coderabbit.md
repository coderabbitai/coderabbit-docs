---
title: Configure CodeRabbit
sidebar_label: Configure CodeRabbit
description:
  CodeRabbit offers various configuration options to tailor the reviews to your
  specific requirements. Configuration can be made using one of the below
  options.
sidebar_position: 2
---

CodeRabbit offers various configuration options to tailor the reviews to your
requirements. Configuration can be made using one of the below options :

1. **Configure using CodeRabbit YAML File** _(Recommended)_
2. **Configure using CodeRabbit UI**

Configuration defined in the YAML file overrides the settings in the UI.

### 1. Configure CodeRabbit using a YAML File {#yaml}

You can add a `.coderabbit.yaml` configuration file to the root of your
repositories. Below is a sample YAML file that can be used as a starting point
and changed as needed:

#### version 2: `Current`

```yaml
# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json
language: "en-US"
early_access: false
reviews:
  profile: "chill"
  request_changes_workflow: false
  high_level_summary: true
  poem: true
  review_status: true
  collapse_walkthrough: false
  auto_review:
    enabled: true
    ignore_title_keywords:
      - "WIP"
      - "DO NOT MERGE"
    drafts: false
chat:
  auto_reply: true
```

YAML settings:

1. **`language`**: Set the language for reviews using the ISO language code. For
   example, `"ja"` configures reviews in Japanese.
2. **`tone_instructions`**: Set the tone for the reviews and the chat. Example:
   'You must use talk like Mr. T. I pity the fool who doesn't!'
3. **`early_access`**: Enroll in the early access program to take advantage of
   forthcoming features before their general release (default:`false`).
4. **`reviews`**: Configures review settings.

   - **`profile`**: Select the reviewer profile between `assertive` and `chill`.
     The `assertive` profile posts more comments and nitpicks the code more
     aggressively, while the `chill` profile is more relaxed and posts fewer
     comments. (default: `chill`).
   - **`request_changes_workflow`**: Enable request changes review workflow for
     CodeRabbit reviews. (default: `false`).
   - **`high_level_summary`**: CodeRabbit generates a high-level summary of the
     changes (default:`true`).
   - **`poem`**: Indicates whether a creative poem should be included in the
     review (default:`true`).
   - **`review_status`**: Include a review status when a review is skipped in
     certain cases. (default:`true`).
   - **`collapse_walkthrough`**: Collapses the walkthrough comment
     (default:`false`).
   - **`path_filters`**: Specifies file patterns to exclude or include for a
     review, such as `!dist/**` and `src/**.tsx`, using glob notation. Example:

     ```yaml
     reviews:
       path_filters:
         - "!**/*.xml"
         - "!**/generated/**"
     ```

   - **`path_instructions`**: Provides specific additional guidelines for code
     review based on file paths. In the given example, JavaScript files are
     singled out for checks against the Google JavaScript style guide. File path
     accepts glob pattern. Example:

     ```yaml
     reviews:
       path_instructions:
         - path: "**/*.js"
           instructions:
             "Review the JavaScript code for conformity with the Google
             JavaScript style guide, highlighting any deviations."
         - path: "tests/**/*"
           instructions:
             "Assess the unit test code employing the Mocha testing framework.
             Test descriptions must be sufficiently detailed to clarify the
             purpose of each test."
     ```

   - **`auto_review`**: Manages settings for automated code reviews.

     - **`enabled`**: Automated code review (default: `true`).
     - **`ignore_title_keywords`**: Review will be ignored if a pull request
       title contains one of the list of keywords (case-insensitive). Example:
       `"WIP"`, `"DO NOT MERGE"`.
     - **`labels`**: Review will be triggered if a pull request matches one of
       the list of labels (case-insensitive).
     - **`drafts`**: Determines whether draft pull requests are reviewed
       (default: `true`).
     - **`base_branches`**: A list of base branches for which the reviews will
       trigger, apart from the default branch. Accepts regex pattern. Example:

     ```yaml
     reviews:
       auto_review:
         base_branches:
           - develop
           - feat/.*
     ```

   - **`tools`**: Configures external tools integration settings.

     - **`ast-grep`**: Configuration for `ast-grep` integration.
       - **`rule_dirs`**: The directory name where the custom `ast-grep` rules
         are stored.
       - **`util_dirs`**: The directory name where the custom `ast-grep` utils
         are stored.
       - **`essential_rules`**: Enable the
         [`ast-grep-essentials`](https://github.com/coderabbitai/ast-grep-essentials)
         package, which contains community-driven security and best practice
         rules. Defaults to `true`.
       - **`packages`**: A package allows you to share rules across multiple
         projects. Essentially, a package is a collection of `ast-grep` rules.
     - **`github-checks`**: Configuration for GitHub Checks integration.
       - **`enabled`**: Enable integration, defaults to true.
       - **`timeout_ms`**: Time in milliseconds to wait for all GitHub Checks to
         conclude, defaults to 90000 (1.5 minutes), maximum is 300000 (5
         minutes), minimum is 0 (no timeout).
     - **`markdownlint`**: Configuration for `markdownlint` integration.
       - **`enabled`**: Enable integration, defaults to true.
     - **`ruff`**: Configuration for `ruff` integration.
       - **`enabled`**: Enable integration, defaults to true.
     - **`shellcheck`**: Configuration for `shellcheck` integration.
       - **`enabled`**: Enable integration, defaults to true.
     - **`languagetool`**: Configuration for `languagetool` integration.

       - **`enabled`**: Enable integration, defaults to true.
       - **`level`**: The level of the rule. It can be one `default` or `picky`.
         If set to `picky`, additional rules will be activated, i.e. rules that
         you might only find useful when checking formal text.
       - **`enabled_rules`**: IDs of rules to be enabled. The rule won't run
         unless 'level' is set to a level that activates the rule.
       - **`disabled_rules`**: IDs of rules to be disabled.
       - **`enabled_categories`**: IDs of categories to be enabled.
       - **`disabled_categories`**: IDs of categories to be disabled.
       - **`enabled_only`**: Only the rules and categories whose IDs are
         specified with `enabled_rules` or `enabled_categories` are enabled.

       ```yaml
       reviews:
         tools:
           ast-grep:
             rule_dirs:
               - "rules"
             util_dirs:
               - "utils"
             essential_rules: true
             packages:
               - "my-awesome-org/my-awesome-package" # public GitHub repository that contains ast-grep rules
           github-checks:
             enabled: true
             timeout_ms: 90000
           markdownlint:
             enabled: true
           ruff:
             enabled: true
           shellcheck:
             enabled: true
           languagetool:
             enabled: true
             enabled_only: false
             level: default
             enabled_categories:
               - "TON_ACADEMIC"
               - "CASING"
       ```

5. **`knowledge_base`**: Configures knowledge base settings.

   - **`learnings`**: Configures learnings settings.
     - **`scope`**: Specify the scope of learnings to use for the knowledge
       base. `local` uses the repository's learnings, `global` uses the
       organization's learnings, and `auto` uses repository's learnings for
       public repositories and organization's learnings for private
       repositories. Default is `auto`.
   - **`issues`**: Configures issues settings.
     - **`scope`**: Specify the scope of git platform (GitHub/GitLab) issues to
       use for the knowledge base. `local` uses the repository's issues,
       `global` uses the organization's issues, and `auto` uses repository's
       issues for public repositories and organization's issues for private
       repositories. Default is `auto`.
   - **`jira`**: Configures Jira settings.
     - **`project_keys`**: A list of Jira project keys to use for the knowledge
       base. If not provided, all projects will be used.
   - **`linear`**: Configures Linear settings.
     - **`team_keys`**: A list of Linear team keys to use for the knowledge
       base. If not provided, all teams will be used.

6. **`chat`**: Defines the behavior of CodeRabbit's bot in conversations.
   - **`auto_reply`**: The bot automatically replies without the need of the
     user tagging it (default: `true`).

Refer:
[CodeRabbit Configuration Schema](https://coderabbit.ai/integrations/schema.v2.json).

<details>

<summary> version 1 (deprecated) </summary>

#### Version 1: `deprecated` (Please use [version 2](#yaml))

```yaml
settings:
  # Enables automatic reviewing of draft pull requests.
  enable_draft_pr_reviews: true
  # Specifies additional base/target branches to be reviewed. Accept regex pattern.
  additional_branches_to_be_reviewed:
    - "master"
    - "yaml/test"
  # Disables generation of release notes.
  disable_high_level_summary: false
  # Specific review instructions for certain file paths. File paths accept glob pattern
  path_based_instructions:
    - path: "**/*.js"
      instructions:
        "Review the JavaScript code against the Google JavaScript style guide
        and point out any mismatches"
    - path: "tests/**/*"
      instructions:
        "Review the following unit test code written using the Mocha test
        library. Ensure that: - The code adheres to best practices associated
        with Mocha. - Descriptive test names are used to clearly convey the
        intent of each test."
  # Comma separated list of keywords in the title that should be ignored.
  ignored_pr_titles: "WIP"
  # ISO Code for the review language.
  review_language: "en"
  # Disables review and other status comments.
  disable_review_status: false
  # Add walkthrough comment in a collapsible section.
  collapse_walkthrough_comment: true
  # Disable automatic code reviews for this repository.
  disable_review: false
```

This configuration file consists of the following settings:

1. **`enable_draft_pr_reviews`**: Set to **`false`** to disable draft pull
   request(PR) reviews.
2. **`additional_branches_to_be_reviewed`**: Define additional branches to be
   reviewed besides the default branch.
3. **`disable_high_level_summary`**: If set to **`true`**, disables high-level
   summary generation.
4. **`path_based_instructions`**: Allows you to specify instructions based on
   file paths. In this example, instructions for Python and JavaScript files are
   provided, encouraging adherence to the Google style guide.
5. **`ignored_pr_titles`**: Specifies ignored PR titles, in this case, "WIP"
   (Work in Progress).
6. **`review_language`**: Sets the review language to French (`fr`).
7. **`disable_poem`**: If set to **`false`**, enables the "poem" feature.
8. **`early_access_program`**: Determines whether to enable the early access
   program (set to **`false`** in this case).
9. **`exclude_file_patterns`**: Specifies patterns for excluding certain files
   from review, such as `!dist/**` and `!**.md`.
10. **`limit_reviews_by_label`**: Limits reviews by label, targeting "first_bug"
    label reviews.
11. **`disable_review`**: Totally disables automatic code reviews for the
    repository.
12. **`disable_review_status`**: Disables review and other status comments.
13. **`collapse_walkthrough_comment`**: Specifies whether to collapse
    walkthrough comments on the review.

</details>

### 2. Configure CodeRabbit through the UI

Reviews can also be configured through the UI under repository settings:

---

### Review Configuration

**Path-based instructions :** Provide additional review guidelines based on the
file paths using glob patterns.

For further guidance, please refer to this
section [Review Instructions](./review-instructions.md).

**Language Selection:** Select the natural language in which you want the review
feedback. CodeRabbit supports most of the widely used languages. The default
language is English.

**Disable High-Level Summary:** This allows disabling the high-level summary
added with the pull request description.

---

### Review Filters

**Disable Reviews:** Disables automatic code reviews for the repository. Reviews
can be initiated on-demand using CodeRabbit commands.

**Enable draft pull request reviews:** Select whether CodeRabbit should review
the draft pull requests.

**Configure reviews using pull request labels:** Select specific pull request
labels for which reviews should occur.

**File Pattern:** Include or exclude specific file patterns from the review.

Please note that code reviews commence with new pull requests or incremental
commits to existing pull requests once the CodeRabbit app is installed. Should
you have any questions or require assistance, our support team is here to help.
