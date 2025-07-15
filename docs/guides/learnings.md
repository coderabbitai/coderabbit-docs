---
title: Teach CodeRabbit your review preferences
description: An overview of the CodeRabbit learnings feature.
---

This page describes how you can configure the code-review behavior of CodeRabbit using natural-language
chat.

For a conceptual overview of CodeRabbit configuration methods, see [Configure CodeRabbit](/guides/configuration-overview). For more information about performing code reviews with CodeRabbit, see
[Review pull requests](/guides/code-review-overview).

## About CodeRabbit learnings {#about}

As your team works with CodeRabbit, it learns your team's code-review
preferences based on chat interactions, and adds these preferences
to an internal database that it associates with your Git platform organization. We call these internal records _learnings_.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Yu0cmmOYA-U?si=WIeOxqPw4ZFFgvlw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

CodeRabbit learnings are flexible, natural-language statements about code-review preferences whose purpose can include the following:

- Special instructions about reviewing particular files.
- Guidance for reviewing all of the files of one repository.
- Code-review preferences that CodeRabbit must apply across all of your organization's repositories.

Every time CodeRabbit prepares to add a comment to a pull request or issue, it loads all of the learnings that it has collected about your organization's code review preferences. CodeRabbit applies these learnings as additional context or instructions for its comment.

CodeRabbit learnings complement the more traditional configuration that you set for your organization and its repositories using the CodeRabbit web interface or [`.coderabbit.yaml` files](/getting-started/configure-coderabbit). Learnings give you a convenient way to quickly set or correct the behavior of CodeRabbit in ways that are highly specific to your team's coding style, or in ways that the CodeRabbit configuration options don't otherwise account for.

You can review and edit your organization's CodeRabbit learnings at any time, as detailed later in this page.

## Add learnings {#add}

To add learnings to the database CodeRabbit keeps about your organization's preferences, communicate
your preferences directly to the appropriate CodeRabbit service account using natural language, in a comment attached to any pull request or issue. For more information about chatting with CodeRabbit using comments, see [CodeRabbit chat](/guides/agent_chat/).

If CodeRabbit decides to create one or more learnings based on a comment, then it makes this explicit in its response to that comment by adding a collapsible section titled **Learnings Added** to its own response comment.

### An example of adding a learning {#example}

Imagine a scenario where CodeRabbit has reviewed a pull request from your team that adds a feature to an authentication middleware library. CodeRabbit has flagged a certain file as needing improvement, attaching this comment to the relevant lines in its review:

> Consider using nested try-catch blocks here to handle different error scenarios more comprehensively.

If this critique disagrees with your team's coding practices specific to try-catch blocks, then you can reply to this CodeRabbit using a comment of your own:

> @coderabbitai Actually, we've found that nested try-catch blocks make our auth middleware harder to debug in production. We prefer early returns with specific error codes - it's cleaner and our monitoring tools can track them better.

CodeRabbit—in this case, using the @coderabbitai service account available on GitHub—considers your reply, and decides to make a learning out of it. It acknowledges this in another reply:

> You're absolutely right about the debugging benefits. Early returns with specific error codes do provide better clarity and monitoring capabilities. I'll remember this preference for your authentication middleware. Thank you for the guidance!

CodeRabbit also adds a **Learnings added** section to this comment, making explicit the fact that this chat has modified its future behavior with your team.

CodeRabbit then creates a new learnings record for itself. Along with metadata such as the pull request number, filename, and GitHub user associated with the learning, CodeRabbit adds this self-instructive text to the new record:

> In authentication middleware, prefer returning early with specific error codes rather than nested try-catch blocks. This improves readability and makes error tracking easier in production environments.

### Best practices for new learnings

When communicating with CodeRabbit during an active code review, you can help make any resulting learnings more specific by replying directly to review comments that CodeRabbit has left on specific files, rather than leaving comments on the overall pull request. This gives CodeRabbit more context when considering feedback, allowing it to create more specific learnings.

## View learnings

To view the learnings that CodeRabbit has associated with your Git platform organization,
follow these steps:

1. Visit [the CodeRabbit web interface](https://app.coderabbit.ai/settings/repositories).

1. In the sidebar, click **Learnings**.

This displays a paged list of all of the learnings associated with your organization, sorted by creation time, newest-first. To see more details about any learnings record, click its text.

### Filter displayed learnings

To filter the displayed learnings by topic or concept, enter that topic or concept into the **Similarity search** field, and set **Top K** to the number of results you want returned. Because this is a vector-based similarity search, the returned learnings don't necessarily contain the exact text of your search terms.

For example, to see the top ten learnings that have to do with error reporting, enter `error reporting` into **Similarity search** and set **Top K** to `10`.

To filter the displayed learnings by repository, user, or file path, click **+ Filters**, and select additional criteria.

### Edit or delete learnings

If your account has the **Admin** [CodeRabbit role](/guides/roles) with your organization, then you can freely edit the text of any stored learning, or delete it outright.

To edit or delete a learning, follow these steps:

1. Click the **Action** menu on the learning record, which resembles three dots.

1. Select **Edit** or **Delete**.

## Configure learnings storage and application

CodeRabbit has several configuration options that modify the storage and application of learnings.

### Opt out of learnings storage

CodeRabbit enables learnings by default. To disable learnings, modify one of the following configuration options:

- To disable all CodeRabbit [knowledge base](/integrations/knowledge-base) features for your organization or repository, which includes learnings, enable [the _Opt out_ setting](/reference/configuration#opt-out).

- To disable all CodeRabbit features that require long-term data retention about your organization's use of CodeRabbit—including learnings—disable [the _Data retention_ setting](/reference/configuration#data-retention).

::warning
Disabling data retention immediately and irrevocably deletes all learnings that CodeRabbit has associated with your organization.
:::

### Specify the scope of applied learnings

[The Learnings configuration setting](/reference/configuration#learnings) lets you specify the _scope_ that CodeRabbit applies to all
of the learnings it has collected about your organization. You can set this option to one of the
following values:

- **`auto`**: When reviewing a public repository, CodeRabbit applies only the learnings specific to that repository. When reviewing private repository, CodeRabbit applies all of your organization's learnings. This is the default setting.
- **`global`**: CodeRabbit applies all of your organization's learnings to all code reviews.
- **`local`**: CodeRabbit applies only learnings associated with code reviews' respective repositories.
