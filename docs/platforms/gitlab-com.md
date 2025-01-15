---
title: Integrating CodeRabbit with GitLab.com
description: Learn how to integrate CodeRabbit and add to your GitLab workflow.
sidebar_label: GitLab.com
sidebar_position: 2
---

CodeRabbit integrates with GitLab to enhance code review and collaboration by:

- Automatically initiating code reviews for newly created merge requests.
- Displaying review comments and suggestions directly on merge requests.
- Enabling seamless interaction with the CodeRabbit bot for real-time feedback and assistance.

This guide will assist you in effectively integrating CodeRabbit with SaaS GitLab.

## GitLab Access Tokens

To enable CodeRabbit to interact with your GitLab repositories, an access token is required. This token grants the necessary permissions for interacting with the Merge Requests and Discussions APIs.

    1. Personal Access Token (PAT): You can create a new GitLab account specifically for CodeRabbit, name it “CodeRabbit” and treat it as a service account. Then generate a PAT from it where PAT will enable seamless integration between CodeRabbit and your GitLab repositories.
    2. Group Access Token: If your organization uses GitLab Premium or Ultimate, you can generate a Group Access Token. This option automatically creates a bot user associated with the group for managing access and posting reviews.

### Personal Access Token

We recommend creating a new user as a service account, associating this user to the group you'd like to install CodeRabbit on, and providing CodeRabbit with the personal access token to allow access. During the installation process, CodeRabbit will automatically configure the required webhook for seamless integration.

<div class="center-image">
 <img
  src="/img/integrations/gitlab_user_choice.png"
  alt="GitLab user modal choice"
  width="1000"
 />
</div>

:::note

If you wish to change the review user, you must provide the access token for the new user who will post reviews and comments. However, this requires manually removing the previous user from the projects and associated webhooks. Once this is done, you will need to reinstall the CodeRabbit app for each project.

:::

<div class="center-image">
 <img
  src="/img/integrations/gitlab_organization_user.png"
  alt="GitLab organization user modal
choice"
  width="1000"
 />
</div>

#### Recommendations

- **Create a dedicated user for CodeRabbit** - This ensures the user is exclusively for CodeRabbit, allowing better access control.
- **Use "CodeRabbit" as the username** - This makes the user easily recognizable for future reference.
- **Use a dedicated email address** - This helps in easy identification and management.
- **Use the CodeRabbit logo as the profile picture** - This further ensures easy recognition. You can download our logo from [here](/img/integrations/logo.svg "download").
- **Developer Access** Ensure the service account user has developer access to the group or projects that you wish to install CodeRabbit on.

#### Key Points to Remember

- Personal access tokens have expiration dates. Ensure the expiration date **covers the duration** of your intended use of CodeRabbit.
- Code reviews will be attributed to the owner of the personal access token.
- If the personal access token expires, you can add a new one via the CodeRabbit UI:
  - Navigate to the **GitLab User** page in the sidebar.
  - Enter the new Access token, and click the **Update** button on the page.

#### Generating a Personal Access Token

GitLab provides an option to generate a personal access token for a new user. Follow these steps to generate the token:

1. Log in using the user designated for CodeRabbit reviews. This user serves as a service account for managing reviews and related activities.
2. Select your avatar on the left sidebar.
3. Choose **Edit Profile**.
4. Select **Access Tokens** from the left sidebar.
5. Click [Add New Token.](https://gitlab.com/-/user_settings/personal_access_tokens)
6. Enter a name and an expiry date for the token.
7. If no expiry date is entered, it defaults to 365 days from the current date.
8. Ensure the following scopes are selected: `api`, `read_api`, `read_user`.
9. Click **Create Personal Access Token**
10. Note down the token as it will only be displayed once.

<div class="center-image">
 <img
  src="/img/integrations/admin-access-token.png"
  alt="GitLab personal access token configuration page"
  width="1000"
 />
</div>

---

### Group Access Token

Creating a Group Access Token in GitLab automatically generates a bot user. Ensure that the token is configured with Developer access. Once set up, you only need to provide this token for integration. Note that a Group Access Token is limited to the scope of the group where it was created. To configure additional groups, you will need to generate a separate Group Access Token for each group.

:::note

By default, GitLab restricts this option to users on the Premium or Ultimate tiers.

:::

#### Generating a Group Access Token

1. Navigate to the group you wish to install CodeRabbit on.
2. Select **Settings** from the left sidebar.
3. Select **Access Tokens** within the Settings heading.
4. Create a Group Access Token.
5. Ensure the following scopes are selected: `api`.
6. Ensure Developer Access is provided.

---

### Where to Provide CodeRabbit the Access Token

By default, if no access token is provided, CodeRabbit will prompt you to provide one during the installation process. However, if you wish to provide the token beforehand, you can do so by navigating to the **Organization Settings** tab, and selecting the **GitLab User** tab on the sidebar. Once entering the token, the token will be validated and saved for future use.

You can confirm the correct user is being selected by verifying the user ID shown on the UI with the user ID of the service account user you created.

---

### Installing CodeRabbit into your GitLab Repositories

1. Go to the [Repositories page](https://app.coderabbit.ai/settings/repositories) in the CodeRabbit app.
2. Select the checkbox next to the repositories where you want to install CodeRabbit. To install it on all repositories at once, select the checkbox at the top.
3. Select **Install Repositories**.

<div class="center-image">
 <img
  src="/img/integrations/gitlab-repo-install.png"
  alt="GitLab Repo Install Modal"
  width="1000"
 />
</div>

The webhook `https://coderabbit.ai/gitlabHandler` will now be installed for the projects selected.

<div class="center-image">
 <img
  src="/img/integrations/gitlab-webhook.png"
  alt="GitLab Webhook Example"
  width="1000"
 />
</div>

### Troubleshooting

:::note

If you are experiencing issues with the webhook, such as coderabbit not being able to access the repository, or not reviewing pull requests, you can manually delete the webhook to the repository.

Then refresh the repository page in the CodeRabbit app and you can reinstall the webhook.

If you cannot install the webhook please check that your GitLab user has the necessary permissions to install the webhook and the PAT is not expired.

:::
