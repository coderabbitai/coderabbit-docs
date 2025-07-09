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

## Configure API Token

To enable CodeRabbit to interact with your Bitbucket repositories, an API token is required. This token grants the
necessary permissions for interacting with the Bitbucket merge request and discussion APIs.

1. Create a new Bitbucket account specifically for CodeRabbit and treat it as a service account.
2. Name the account "CodeRabbit".
3. If your Bitbucket workspace requires two-step verification, then you must also enable two-step verification on this
   new account.
4. Generate an API Token to enable seamless integration between CodeRabbit and your Bitbucket repositories.

We recommend creating a new user as a service account, associating this user to the workspace you'd like to install
CodeRabbit on, and providing CodeRabbit with the API token to allow access. During the installation process, CodeRabbit
will automatically configure the required webhook for seamless integration.

:::note

If you wish to change the review user, you must provide the API token for the new user who will post reviews and
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

- Code reviews will be attributed to the owner of the API token.

#### Generating an API token

Bitbucket provides an option to generate an API token for a new user. Follow these steps to generate the token:

1. Log in using the user designated for CodeRabbit reviews. This user serves as a service account for managing reviews
   and related activities.
2. Go to [API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens).
3. Click **Create API token with scopes**.
4. Enter a name easily recognizable for this API token usage and an expiration date based on your plan of using the
   product.
5. On next step select **Bitbucket**
6. Ensure the following scopes are selected:
   - read:account
   - read:user:bitbucket
   - write:issue:bitbucket
   - read:issue:bitbucket
   - read:workspace:bitbucket
   - admin:project:bitbucket
   - write:webhook:bitbucket
   - read:webhook:bitbucket
   - read:pipeline:bitbucket
   - read:runner:bitbucket
   - read:repository:bitbucket
   - write:repository:bitbucket
   - read:pullrequest:bitbucket
   - write:pullrequest:bitbucket
7. Click **Create**
8. Note down the API token as it will only be displayed once.

### Where to Provide CodeRabbit the API Token

By default, if no API token is provided, CodeRabbit will prompt you to provide one during the installation process.
However, if you wish to provide the token beforehand, you can do so by navigating to the **Organization Settings** tab,
and selecting the **Bitbucket User** tab on the sidebar. Once entering the API token, the token will be validated and
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
webhook and the API Token is properly configured.

:::
