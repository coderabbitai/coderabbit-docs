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

## Control the flow of code reviews {#flow}

By default, CodeRabbit automatically reviews every new pull request created in
your repository. It updates its review with comments whenever the pull request has new commits
pushed to it.

The following sections show you how to tell CodeRabbit to modify this behavior with
a specific pull request, such as pausing reviews, or resolving open comments.

For more information about permanently configuring the behavior of CodeRabbit on
your repository, see [Add a configuration file](/getting-started/configure-coderabbit).

### Have CodeRabbit ignore a pull request {#ignore}

If you want CodeRabbit to completely disregard a pull request, then add
the following text, on a line by itself, to the pull request description:

```
@coderabbitai ignore
```

You can include this line while creating the pull request, or you can add it
to the description after you create it.

So long as the `@coderabbitai ignore` line remains in the pull request description, CodeRabbit
doesn't perform any processing at all on this pull request. This also causes
CodeRabbit to ignore any attempts to issue to commands using comments that mention `@coderabbitai`.

To have CodeRabbit stop ignoring a pull request, edit the description to
remove the `@coderabbitai ignore` line.

### Pause and resume code reviews {#pause-resume}

You can tell CodeRabbit to pause its automatic reviews of a pull request. If
you do, then you can still manually request CodeRabbit to review changes using
the commands listed on [Code review command reference](/reference/review-commands).

To pause automated reviews of a pull request, post the following comment to the
pull request:

```
@coderabbitai pause
```

To resume automated reviews after pausing them, post the following comment to the
pull request:

```
@coderabbitai resume
```

## Manually request code reviews {#request}

You can ask CodeRabbit to perform a code review at any time. This can be useful
when you have paused automated code reviews. Manually requested reviews have
two types:

- A _full review_ disregards any comments that CodeRabbit has already made
  on this pull request, and generates a complete review of the entire pull request.

- An _incremental review_ takes all comments that CodeRabbit has made since its most recent full review into consideration, and generates a review of only the new changes.

To manually request a full review, post the following comment to the
pull request:

```
@coderabbitai full review
```

To manually request an incremental review, post the following comment to the
pull request:

```
@coderabbitai review
```

## Resolve comments {#resolve}

To have CodeRabbit mark all of its previous comments as resolved, post the following comment to the
pull request:

```
@coderabbitai resolve
```

## Get information about CodeRabbit {#info}

The commands in this section request CodeRabbit to display its own configuration
or documentation.

### Display current configuration {#config}

To have CodeRabbit post a comment listing out its current configuration
with your repository, post the following comment to the
pull request:

```
@coderabbitai configuration
```

### Display a quick-reference guide {#help}

To have CodeRabbit post a comment to the pull request with a quick-reference
guide to its own commands and other features, post the following comment to the
pull request:

```
@coderabbitai help
```

## What's next {#whats-next}

- [Generate code improvements](/guides/generate-improvements)
- [Best practices](/guides/code-review-best-practices)
- [Troubleshooting](/guides/code-review-troubleshooting)
