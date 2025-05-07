---
title: Integrating CodeRabbit with GitHub.com
description: Learn how to integrate CodeRabbit and add to your GitHub workflow.
sidebar_label: GitHub.com
sidebar_position: 1
---

This is a step-by-step guide to integrate CodeRabbit with your GitHub repositories.

> **CodeRabbit** is an AI code reviewer designed to ease the challenges of code review, supporting repository maintainers and teams. It reviews your PRs and provides concise summaries, identifies potential issues, and offers insights that might be missed during manual reviews.

## How CodeRabbit Works?

> CodeRabbit integrates with GitHub, automating the code review process from the moment a pull request is created.

It preprocesses the PR content, builds context, leverages Large Language Models for analysis, and then post-processes the AI response before posting the review back to GitHub. This streamlined workflow ensures thorough AI-powered code reviews without manual intervention.

![How CodeRabbit Works](/img/integrations/how-codeRabbit-works.png)

## Let's Integrate CodeRabbit with GitHub

### 1. Accessing CodeRabbit

Visit the [CodeRabbit login](https://app.coderabbit.ai/login?free-trial) page. You'll see all the authentication options, select "**Login with GitHub**" to proceed.

![CodeRabbit Login](/img/integrations/login-self-hosted-github.png)

### 2. Authorization

When you choose **Login with GitHub** in step1, you'll be prompted to authorize CodeRabbit.

> This step grants the necessary permissions for CodeRabbit to interact with your repositories and pull requests.

![Authorization Login](/img/integrations/authorization-codeRabbit.png)

### 3. Selecting Your Organization

Upon Authorization, If you're part of multiple organizations, you'll have the opportunity to choose which one you want to associate with CodeRabbit. This ensures that you're setting up the tool for the correct team or project.

![How to Select Organization in CodeRabbit](/img/integrations/select-organization.png)

### 4. Exploring the CodeRabbit Dashboard

Upon successful authorization, you'll be logged into the CodeRabbit user interface.

Here, you can add repositories and configure CodeRabbit config settings for each repository.

![CodeRabbit Dashboard](/img/integrations/codeRabbit-dashboard.png)

:::tip
If you opt to authorize all repositories during setup, CodeRabbit will automatically include any new repositories you create on GitHub in the future. This saves you the hassle of manual additions down the line.
:::

### 5. CodeRabbit Configuration

You can configure CodeRabbit through a YAML file or using the [App's UI](https://app.coderabbit.ai/login).

You can tailor CodeRabbit's functionality using the `.coderabbit.yaml` file, which you place directly in your GitHub repository. This file mirrors the options available in the CodeRabbit user interface, with each setting in the YAML corresponding to a specific toggle in the UI. Configure CodeRabbit either through the coderabbit.yaml file or the interface, depending on your preference.

:::note

If a `.coderabbit.yaml` file exists in your GitHub repository, it takes precedence over any UI settings. Choose either the YAML file or UI configuration - you don't need to use both. **Refer CodeRabbit YAML schema [here](https://storage.googleapis.com/coderabbit_public_assets/schema.v2.json)**

:::

Once your `.coderabbit.yaml` file is prepared according to your needs, simply place it in your GitHub repository, and you're all set — CodeRabbit is now integrated.

> When a pull request is created targeting the master branch, CodeRabbit automatically initiates its review process. It analyzes the changes and generates a summary and walkthrough of the modifications. The specific feedback and analysis provided by CodeRabbit are determined by the options you've configured in your YAML file.

Let's see a few examples of CodeRabbit's review comments from a specific pull request in one of the projects.

This particular PR involved in changing the language model from LLaMA 2 to LLaMA 3, for testing purposes. These examples will showcase how CodeRabbit analyzed and commented on this significant model switch.

## Sample PR Review Workflow using CodeRabbit

CodeRabbit automatically generates a PR summary highlighting key changes.

![CodeRabbit Summary](/img/integrations/summary-by-codeRabbit.png)

This image shows CodeRabbit's review status for another pull request. It highlights that **12 actionable comments** were generated, and the review also includes additional comments on specific files, demonstrating CodeRabbit's comprehensive analysis of the code changes.

![Actionable Comments By CodeRabbit](/img/integrations/actionable-comments-by-coderabbit.png)

You can also use [CodeRabbit commands](https://docs.coderabbit.ai/guides/commands/) to chat with the AI code Reviewer.

![CodeRabbit Commands](/img/integrations/full-review.png)

CodeRabbit could generate a **code sequence diagram** when you request a full review.

The sequence diagram illustrates the precise flow of interactions between the objects in the system.

![CodeRabbit Sequence Diagram](/img/integrations/coderabbit-sequence-diagram.png)

Also, check out the response when asked for what improvements can be done on the code level.

![Code Improvements Suggested by CodeRabbit](/img/integrations/improvements.png)

In addition to providing reviews and summaries, **CodeRabbit** can also detect configuration issues.

> For example, I accidentally set up both CodeRabbit Pro (The process we've been discussing) and the open-source version (Refer to [different config process](https://github.com/coderabbitai/ai-pr-reviewer?tab=readme-ov-file#install-instructions)) in my repository at the same time.

CodeRabbit automatically detects and alerts you about configuration conflicts.

![Configuration Issues by CodeRabbit](/img/integrations/configuration.png)

CodeRabbit generates detailed statistics and test plans for each pull request.

![Statistics by CodeRabbit](/img/integrations/statistics.png)

![Test Plan by CodeRabbit](/img/integrations/test-plan.png)

> CodeRabbit also allows you to configure **custom review instructions** based on your organization's needs, in case you want it to follow specific guidelines beyond the standard review, to learn more on [adding custom review instructions](/guides/review-instructions)

Whether you manage a popular repository or are working on a smaller project, whether it's hosted on **GitLab, GitHub, or self-hosted GitHub or GitLab**, CodeRabbit can help streamline your development process. This AI Code Review assistant is designed to save you time by automating code reviews and offering insightful feedback.

> Explore, Experiment, Discover how [CodeRabbit](https://docs.coderabbit.ai/) can streamline your code review process using AI.
