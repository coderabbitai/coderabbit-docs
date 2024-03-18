---
title: Integrate CodeRabbit with Jira
description: Integrate CodeRabbit with Jira.
sidebar_label: Setup
image: "/preview_meta.jpg"
---

<head>
 <meta charSet="utf-8" />
  <meta name="title" content="Connect CodeRabbit with Jira" />
  <meta name="description" content="Integrate CodeRabbit with Jira" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://coderabbit.ai/" />
  <meta property="og:title" content="Connect CodeRabbit with Jira" />
  <meta property="og:description" content="CodeRabbit: AI-powered Code Reviews" />
  <meta property="og:image" content="/preview_meta.jpg" />

  <meta name="twitter:image" content="https://coderabbit.ai/preview_meta.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Connect CodeRabbit with Jira" />
  <meta name="twitter:description" content="CodeRabbit: AI-powered Code Reviews" />
</head>

Jira is a widely-used project management tool that helps teams organize tasks, track progress, and collaborate effectively. With Jira, teams can create issues to represent tasks, bugs, or features, assign them to team members, set due dates, and monitor their status throughout the project lifecycle.

:::note
Visit [Jira](https://www.atlassian.com/software/jira) if you're unfamiliar and would like to learn more.
:::

As your team works on resolving Jira issues, CodeRabbit automatically assesses the changes made in the associated pull requests, helping you meet project objectives and maintain code quality standards.

### Connect CodeRabbit with Jira

![Integrations Page](../images/cr-integrations-light.png#gh-light-mode-only)
![Integrations Page](../images/cr-integrations-dark.png#gh-dark-mode-only)

Visit the integrations page by selecting Integrations on the left sidebar on the webapp. On this page, toggle the button for the Jira Integration.

![Integrations Page](../images/Jira/jira-login-light.png#gh-light-mode-only)
![Integrations Page](../images/Jira/jira-login-dark.png#gh-dark-mode-only)

Once toggling, you will be redirected over to Jira's authorization page. If you are not signed in, please sign in with your Jira credentials.

![Integrations Page](../images/Jira/jira-auth-light.png#gh-light-mode-only)
![Integrations Page](../images/Jira/jira-auth-dark.png#gh-dark-mode-only)

Lastly, Jira will ask you to authorize CodeRabbit for read access to Jira Issues and read/write access to manage webhooks.

![Integrations Page](../images/Jira/jira-connected-dark.png#gh-dark-mode-only)
![Integrations Page](../images/Jira/jira-connected-light.png#gh-light-mode-only)

**That's It!** Jira will redirect you back to the CodeRabbit integrations page where you should see the toggle enabled for the Jira Integration.

### Disconnect CodeRabbit with Jira

Disconnecting the integration is seamless. Just toggle the button off for the Jira Integration and CodeRabbit will automatically disconnect.

---

Next we will look at how we can link Jira issues and see how CodeRabbit assess them within the Pull Request.
