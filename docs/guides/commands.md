---
title: Control and manage code reviews
description: Learn how to control CodeRabbit using commands in pull request comments
---

This page is about issuing direct commands to CodeRabbit during code reviews.
For a general overview of performing code reviews with CodeRabbit, see [Review pull requests](/guides/code-review-overview).

You can control CodeRabbit's behavior with a specific pull request by mentioning the
username of its bot, `@coderabbitai`, alongside keywords in comments or the pull
request description, as specified by the next sections of this page.

For a complete CodeRabbit command reference, see [Code review command reference](/reference/review-commands).

## Control automatic code reviews {#flow}

By default, CodeRabbit automatically reviews every new pull request created in
your repository. It updates its review with comments whenever the pull request has new commits
pushed to it.

The following sections show you how to tell CodeRabbit to modify this behavior with
a specific pull request, such as pausing reviews, or resolving open comments.

For more information about permanently configuring the behavior of CodeRabbit on
your repository, see [Add a configuration file](/getting-started/configure-coderabbit).

### Pause and resume automatic code reviews {#pause-resume}

You can tell CodeRabbit to pause its automatic reviews of a pull request. If
you do, then you can still manually request CodeRabbit to review changes using
the commands listed on [Code review command reference](/reference/review-commands).

To pause automated reviews of a pull request, post the following comment to the
pull request:

```text
@coderabbitai pause
```

To resume automated reviews after pausing them, post the following comment to the
pull request:

```text
@coderabbitai resume
```

### Disable automatic code reviews {#ignore}

To disable automatic code reviews for a pull request, add the following line
anywhere in the pull request description:

```text
@coderabbitai ignore
```

As long as that text remains in the description, CodeRabbit will not
automatically review any commits associated with that pull request.
You can still [chat with CodeRabbit](/guides/agent_chat) and issue other commands in the pull
request comments.

To enable automatic reviews on that pull request, delete "`@coderabbitai ignore`"
from the pull request description. CodeRabbit commences automatic reviews starting with
the next commit made to the branch under review.

## Manually request code reviews {#request}

You can ask CodeRabbit to perform a code review at any time. This can be useful
when you have paused automated code reviews. Manually requested reviews have
two types:

- A _full review_ disregards any comments that CodeRabbit has already made
  on this pull request, and generates a complete review of the entire pull request.

- An _incremental review_ takes all comments that CodeRabbit has made since its most recent full review into consideration, and generates a review of only the new changes.

To manually request a full review, post the following comment to the
pull request:

```text
@coderabbitai full review
```

To manually request an incremental review, post the following comment to the
pull request:

```text
@coderabbitai review
```

## Resolve comments {#resolve}

To have CodeRabbit mark all of its previous comments as resolved, post the following comment to the
pull request:

```text
@coderabbitai resolve
```

## Update information about the pull request {#update}

The commands in this section request CodeRabbit to generate and post updated information
about the pull request itself.

### Update the summary text {#summary}

To have CodeRabbit update the generated summary of the branch’s proposed changes
to the pull request’s description, post the following comment:

```text
@coderabbitai summary
```

CodeRabbit updates the summary text to the description under the heading
"Summary by CodeRabbit".

### Diagram the pull request history {#diagram}

To have CodeRabbit post a comment that contains a sequence diagram which visualizes the
history of the pull request under review, post the following comment:

```text
@coderabbitai generate sequence diagram
```

## Get information about CodeRabbit {#info}

The commands in this section request CodeRabbit to display its own configuration
or documentation.

### Display current configuration {#config}

To have CodeRabbit post a comment listing out its current configuration
with your repository, post the following comment to the
pull request:

```text
@coderabbitai configuration
```

### Display a quick-reference guide {#help}

To have CodeRabbit post a comment to the pull request with a quick-reference
guide to its own commands and other features, post the following comment to the
pull request:

```text
@coderabbitai help
```

## What's next {#whats-next}

- [Generate code improvements](/guides/generate-improvements)
- [Best practices](/guides/code-review-best-practices)
- [Troubleshooting](/guides/code-review-troubleshooting)
