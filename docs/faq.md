---
title: FAQs
sidebar_label: FAQs
description: Frequently asked questions about CodeRabbit.
sidebar_position: 8
---

### General

#### How accurate is CodeRabbit's review?

Early adoption results for CodeRabbit have been highly promising, demonstrating
significant accuracy in code reviews. However, it's crucial to understand that
AI is an evolving field, and absolute 100% accuracy can't be guaranteed. Our
technology is continuously improving, aiming for the highest possible accuracy
in reviews.

#### Which programming languages does CodeRabbit support?

CodeRabbit is designed to work with all programming languages. The
proficiency of our AI models might vary between languages based on their
popularity and the public availability of training data.

#### Does CodeRabbit store my code?

We do not store your code. The code repository that is cloned at the time of the review is
disposed of as soon as the review is complete. During the review, there is
complete data isolation of the code being reviewed, and no one from CodeRabbit
or outside has access to the code.

#### Does CodeRabbit use my proprietary code for training language models?

We train our system only using publicly available datasets. CodeRabbit never
uses proprietary code from private repositories for training purposes.

#### Can I switch between different organizations on CodeRabbit?

Yes, you can switch between different organizations on CodeRabbit. To do so,
click on the organization name in the top-left corner of the CodeRabbit UI.

![Switch Organizations](/img/faq/cr_support_orgs_light.png#gh-light-mode-only)
![Switch Organizations](/img/faq/cr_support_orgs_dark.png#gh-dark-mode-only)

#### How does CodeRabbit compare to other AI code generators?

Code reviews remain essential, whether the code is written by a human or a bot.
This is mainly because the perspective of the reviewer differs from that of the
code generator, whether human or machine. This distinction is precisely why
human peer reviews have been effective for so long. While AI-powered
code-generation tools like GitHub Copilot hold immense potential, it's important to recognize that
these generators are still in their early stages and may not be equipped to
auto-generate meaningful code for moderately complex applications.

#### How is CodeRabbit different from other code review tools?

Traditional code review tools excel in linting and static analysis, but they
fall short in providing context-aware, conversational feedback with actionable
suggestions for changes that can be directly committed. On the other hand,
**CodeRabbit** leverages AI to understand the intent behind the code changes and
provide human-like feedback for applying the best practices.

### Subscription

#### Can a CodeRabbit subscription be used across multiple organizations?

Subscription seats are tied to the specific GitHub/GitLab organization under
which they are purchased and cannot be used under another organization.

#### Do I need my own OpenAI key with CodeRabbit Pro?

OpenAI cost is included as part of the subscription. You don't need to have your
own OpenAI key.

#### How can I add or remove users for my subscription?

To manage users, log in to CodeRabbit and navigate to subscriptions. You can add
or remove users as needed.

### Usage and Configuration

#### Can CodeRabbit review my existing PRs after integrating it?

CodeRabbit will by default only review new PRs or existing PRs which have a new
commit after the app is installed. You can, however, use the
`@coderabbitai review` command on the PR to trigger a review for existing PRs.

#### Can I customize CodeRabbit?

Reviews are customizable. For information, check out our
[Customization](./guides/review-instructions.md) guide.

#### Can I choose a language other than English for the reviews?

CodeRabbit supports most widely used languages. You can configure this in the
repository settings.

#### What access does CodeRabbit need to my repositories?

CodeRabbit requests minimal access to perform code reviews and post comments on
Pull Requests. You can review the permissions requested during the installation process.

#### How can I interact with the CodeRabbit bot?

To interact with CodeRabbit's bot, reply to the CodeRabbit Comment. If there are
team members collaborating on pull requests, the bot stays silent by default but
can be engaged by tagging **@coderabbitai**. This feature allows you to provide
context, generate test cases, or ask for specific code suggestions, all within
the context of your code lines or entire files.

#### Can individual developers use CodeRabbit?

Absolutely! Whether you're an individual developer or part of an organization,
CodeRabbit can be your coding assistant, providing you with invaluable
suggestions.

#### Which branches are the pull requests reviewed on?

CodeRabbit reviews pull requests on the default branch by default. You can
change this in the repository settings.

#### CodeRabbit Usage Limits

There are hourly rate limits for each developer per repository:

- Number of files reviewed per hour: 200
- Number of reviews : 3 back-to-back reviews followed by 3 reviews/hour
- Number of conversations: 25 back-to-back messages followed by 50 messages/hour

In-trial and open-source plans have lower rate limits than the paid plan. In all
cases, we re-allow further reviews/conversations after a brief timeout.

### Integration

#### Who can install CodeRabbit on the repositories?

You need to be an admin of the organization to add the repositories.

#### I can't add CodeRabbit to my GitLab Repositories. What should I do?

If there are any access restrictions by domain, then you will need to add
`coderabbit.ai` as an allowed domain.

:::tip

If you have further questions or need additional information, please check out
our [Support](./about/support.md) page for more details.

:::
