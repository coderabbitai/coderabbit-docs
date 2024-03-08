---
title: Customize CodeRabbit
sidebar_label: Customize CodeRabbit
description: Accelerate Code Reviews with AI
image: "/preview_meta.jpg"
show-title: false
---

<head>
 <meta charSet="utf-8" />
  <meta name="title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta name="description" content="Accelerate Code Reviews with AI" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://coderabbit.ai/" />
  <meta property="og:title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta property="og:description" content="Accelerate Code Reviews with AI" />
  <meta property="og:image" content="/preview_meta.jpg" />

  <meta name="twitter:image" content="https://coderabbit.ai/preview_meta.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta name="twitter:description" content="Accelerate Code Reviews with AI" />
</head>

CodeRabbit offers various customization options to tailor the reviews to your
specific requirements. Customizations can be made using one of the below options
:

1. **Customization via CodeRabbit YAML File** _(Recommended)_
2. **Customization via CodeRabbit UI**

Customization defined in the YAML file overrides the settings in the UI.

#### 1. Customize CodeRabbit using a YAML File[](https://coderabbit.ai/docs/get-started/customize-coderabbit)

You can add a `.coderabbit.yaml` configuration file to your repositories. Below
is a sample YAML file that can be used as a starting point and change as needed:

#### version 2: `Current`

```yaml
language: "ja"
early_access: false
reviews:
  request_changes_workflow: false
  high_level_summary: true
  poem: true
  review_status: true
  collapse_walkthrough: false
  path_filters:
    - "!**/.xml"
  path_instructions:
    - path: "**/*.js"
      instructions:
        "Review the JavaScript code for conformity with the Google JavaScript
        style guide, highlighting any deviations."
    - path: "tests/**/*"
      instructions: |
        "Assess the unit test code employing the Mocha testing framework. Confirm that:
        - The tests adhere to Mocha's established best practices.
        - Test descriptions are sufficiently detailed to clarify the purpose of each test."
  auto_review:
    enabled: true
    ignore_title_keywords:
      - "WIP"
      - "DO NOT MERGE"
    drafts: false
    base_branches:
      - "develop"
      - "feat/.*"
chat:
  auto_reply: true
```

**Note**: `.coderabbit.yaml` file should be placed at the root directory of the
repository.

Yaml settings:

1. **language**: Set the language for reviews using the ISO language code. For
   example, `"fr"` stands for French (default:`en`).

2. **early_access**: Enroll in the early access program to take advantage of
   forthcoming features before their general release (default:`false`).

3. **reviews**: Configurations for the code reviews.
   - **request_changes_workflow**: Enable Request Changes review workflow for
     CodeRabbit reviews. (default: `false`).
   - **high_level_summary**: CodeRabbit generates a high level summary of the
     changes (default:`true`).
   - **poem**: Indicates whether a creative poem should be included in the
     review (default:`true`).
   - **review_status**: Indicates the status of the review (default:`true`).
   - **collapse_walkthrough**: Collapses the walkthrough comment
     (default:`false`).
   - **path_filters**: Specifies file patterns to exclude or include for a
     review, such as `!dist/**` and `src/**.tsx`, using glob notation.
   - **path_instructions**: Provides specific additional guidelines for code
     review based on file paths. In the given example, JavaScript files are
     singled out for checks against the Google JavaScript style guide. File path
     accepts glob pattern
   - **auto_review**: Manages settings for automated code reviews, such as:
     - **enabled**: Automated code review (default: `true`).
     - **ignore_title_keywords**: Review will be ignored if a pull request title
       contains one of the list of keywords (e.g., `"WIP"`, `"DO NOT MERGE"`).
     - **labels**: Review will be triggered if a pull request contains one of
       the list of labels.
     - **drafts**: Determines whether draft pull requests are reviewed (default:
       `true`).
     - **base_branches**: A list of base branches where the reviews will occur
       apart from the default branch. Accepts regex pattern.
4. **chat**: Defines the behavior of CodeRabbit's bot in conversations.
   - **auto_reply**: The bot automatically replies without the need of the user
     tagging it ( default: `true` ).

Refer:
[CodeRabbit Configuration Schema](https://coderabbit.ai/integrations/coderabbit-overrides.v2.json).

<details>
<summary> version 1 (deprecated) </summary>

#### version 1: `deprecated` (Please use version [version 2](/guides/customize-coderabbit))

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
        "Review the javascript code against the google javascript style guide
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

<!-- ![code](./images/ymlrabbit.png) -->

This configuration file consists of the following settings:

1. **enable_draft_pr_reviews**: Set to **false** to disable draft pull
   request(PR) reviews.
2. **additional_branches_to_be_reviewed**: Define additional branches to be
   reviewed besides the default branch.
3. **disable_high_level_summary**: If set to **true**, disables high-level
   summary generation.
4. **path_based_instructions**: Allows you to specify instructions based on file
   paths. In this example, instructions for Python and JavaScript files are
   provided, encouraging adherence to the Google style guide.
5. **ignored_pr_titles**: Specifies ignored PR titles, in this case, "WIP" (Work
   in Progress).
6. **review_language**: Sets the review language to French ("fr").
7. **disable_poem**: If set to **false**, enables the "poem" feature.
8. **early_access_program**: Determines whether to enable the early access
   program (set to **false** in this case).
9. **exclude_file_patterns**: Specifies patterns for excluding certain files
   from review, such as `!dist/**` and `!**.md`.
10. **limit_reviews_by_label**: Limits reviews by label, targeting "first_bug"
    label reviews.
11. **disable_review**: Totally disables automatic code reviews for the
    repository.
12. **disable_review_status**: This is the comment posted for each incremental
    review status. This removes the review status comment. Reviews will still
    take place. However, optional comments added to the review status will not
    be posted.
13. **collapse_walkthrough_comment**: Specifies whether to collapse walkthrough
    comments on the review.

Refer:
[CodeRabbit configuration schema](https://coderabbit.ai/integrations/coderabbit-overrides.json).

</details>

#### 2. Customize CodeRabbit through the UI [](https://coderabbit.ai/docs/get-started#2-customize-coderabbit-through-the-ui-dashboard)

Reviews can also be customized through the UI under repository settings:

### Review Customization[](https://coderabbit.ai/docs/get-started#review-customization)

[](../get-started/images/tailor2.png)

**Path based instructions :** Provide additional review guidelines based on the
file paths using glob patterns.

For further guidance please refer this
section [Prompt Customization](/guides/prompt-customization)

**Language Selection:** Select the natural language in which you want the review
feedback. CodeRabbit supports most of the widely used languages. The default
language is English.

**Disable High Level Summary:** This allows disabling high level summary added
with the pull request description.

### Review Filters [](https://coderabbit.ai/docs/get-started#review-filters)

[](../get-started/images/tailor3.png)

**Disable Reviews:** Disables automatic code reviews for the repository. Reviews
can be initiated on-demand using CodeRabbit commands.

**Enable Draft Pull request Reviews:** Select whether CodeRabbit should review
the draft pull requests.

**Configure reviews using pull request labels:** Select specific pull request
labels for which reviews should occur.

**File Pattern:** Include or exclude specific file patterns from the review.

Please note that code reviews commence with new pull requests or incremental
commits to existing pull requests once the CodeRabbit app is installed. Should
you have any questions or require assistance, our support team is here to help.
