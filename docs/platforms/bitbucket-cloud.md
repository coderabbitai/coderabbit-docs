---
title: "Bitbucket Cloud"
description: "Learn how to integrate CodeRabbit with Bitbucket Cloud."
sidebar_label: "Bitbucket Cloud"
sidebar_position: 6
---

CodeRabbit integrates with Bitbucket Cloud to enhance code review and collaboration by:

- Automatically initiating code reviews for newly created merge requests.
- Displaying review comments and suggestions directly on merge requests.
- Enabling seamless interaction with the CodeRabbit bot for real-time feedback and assistance.

This guide will assist you in effectively integrating CodeRabbit with Bitbucket Cloud.

## Configure Api Token

To enable CodeRabbit to interact with your Bitbucket repositories, an api token is required. This token grants the
necessary permissions for interacting with the Merge Requests and Discussions APIs.

1. Create a new Bitbucket account specifically for CodeRabbit and treat it as a service account.
2. Name the account "CodeRabbit".
3. If your Bitbucket workspace requires two-step verification, then you must also enable two-step verification on this
   new account.
4. Generate an Api Token to enable seamless integration between CodeRabbit and your Bitbucket repositories.

We recommend creating a new user as a service account, associating this user to the workspace you'd like to install
CodeRabbit on, and providing CodeRabbit with the api token to allow access. During the installation process, CodeRabbit
will automatically configure the required webhook for seamless integration.

:::note

If you wish to change the review user, you must provide the api token for the new user who will post reviews and
comments. However, this requires manually removing the previous user from the projects and associated webhooks. Once
this is done, you will need to reinstall the CodeRabbit app for each project.

:::

### Recommendations

- **Create a dedicated user for CodeRabbit** - This ensures the user is exclusively for CodeRabbit, allowing better
  access control.
- **Use "CodeRabbit" as the username** - This makes the user easily recognizable for future reference.
- **Use a dedicated email address** - This helps in easy identification and management.
- **Use the CodeRabbit logo as the profile picture** - This further ensures easy recognition. You can download our logo
  from [here](/img/integrations/logo.svg "download").
- **Developer Access** Ensure the service account user has developer access to the projects that you wish to install
  CodeRabbit on.

#### Key Points to Remember

- Code reviews will be attributed to the owner of the api token.

#### Generating an Api token

Bitbucket provides an option to generate an api token for a new user. Follow these steps to generate the token:

1. Log in using the user designated for CodeRabbit reviews. This user serves as a service account for managing reviews
   and related activities.
2. Go to ["API Tokens Settings"](https://id.atlassian.com/manage-profile/security/api-tokens).
3. Click **Create API token with scopes**.
4. Enter a name easily recognizable for this api token usage and an expiration date based on your plan of using the
   product.
5. On next step select **Bitbucket**
6. Ensure the following scopes are selected:
7. read:account
8. read:user:bitbucket
9. write:issue:bitbucket
10. read:issue:bitbucket
11. read:workspace:bitbucket
12. admin:project:bitbucket
13. write:webhook:bitbucket
14. read:webhook:bitbucket
15. read:pipeline:bitbucket
16. read:runner:bitbucket
17. read:repository:bitbucket
18. write:repository:bitbucket
19. read:pullrequest:bitbucket
20. write:pullrequest:bitbucket
21. Click **Create**
22. Note down the api token as it will only be displayed once.

<div class="center-image">
 <img
  src="/img/integrations/bitbucket-api-token-scopes.png"
  alt="Bitbucket API token scopes"
  width="1000"
 />
</div>

### Where to Provide CodeRabbit the Api Token

By default, if no api token is provided, CodeRabbit will prompt you to provide one during the installation process.
However, if you wish to provide the token beforehand, you can do so by navigating to the **Organization Settings** tab,
and selecting the **Bitbucket User** tab on the sidebar. Once entering the api token, the token will be validated and
saved for future use.

You can confirm the correct user is being selected by verifying the user ID shown on the UI with the user ID of the
service account user you created.

---

### Installing CodeRabbit into your Bitbucket Repositories

1. Go to the [Repositories page](https://app.coderabbit.ai/settings/repositories) in the CodeRabbit app.
2. Select the checkbox next to the repositories where you want to install CodeRabbit. To install it on all repositories
   at once, select the checkbox at the top.
3. Select **Install Repositories**.

<div class="center-image">
 <img
  src="/img/integrations/gitlab-repo-install.png"
  alt="Bitbucket Repo Install Modal"
  width="1000"
 />
</div>

The webhook `https://coderabbit.ai/bitbucketHandler` will now be installed for the projects selected.

<div class="center-image">
 <img
  src="/img/integrations/bitbucket-webhook.png"
  alt="Bitbucket Webhook Example"
  width="1000"
 />
</div>

### Troubleshooting

:::note

If you are experiencing issues with the webhook, such as CodeRabbit not being able to access the repository, or not
reviewing pull requests, you can manually delete the webhook to the repository.

Then refresh the repository page in the CodeRabbit app and you can reinstall the webhook.

If you cannot install the webhook please check that your Bitbucket user has the necessary permissions to install the
webhook and the Api Token is properly configured.

:::
