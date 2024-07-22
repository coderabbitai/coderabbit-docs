---
title: CodeRabbit for Self-Managed GitHub
description: Integrate CodeRabbit with your Self-Managed GitHub instance.
sidebar_label: Self-Managed GitHub
sidebar_position: 3
---

This page guides you through the process of integrating your Self-Managed GitHub with CodeRabbit.

To initiate the integration, we require specific information. This is essential
for the initial setup of CodeRabbit within your domain. Once this setup is
complete, you can log in directly.

### **Step 1: Getting Started**

**Visit CodeRabbit:** Visit our [Login](https://coderabbit.ai/login) page and 
select Self-Hosted GitHub

![login-page](/img/integrations/login-self-hosted-github.png)

On this page, enter the URL of your self-managed GitHub instance and click
submit. Once, you submit, we check our database for a record of your
organization and if we find an existing one, we will start the login process.

![Untitled](/img/integrations/self-hosted-github-host-url.png)

If the self-managed GitHub instance is not found, you will be required to enter more details for the onboarding.

### **Step 2: GitHub OAuth App**

Navigate to your GitHub Self-Hosted Instance and follow the steps below to [create an OAuth App](https://docs.github.com/en/enterprise-server@latest/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app):

1. Sign in to your GitHub Enterprise account.
2. In the upper-right corner of any page, click your profile photo, then click **Settings**.
3. In the left sidebar, click **Developer settings** > **OAuth Apps**.
4. Click **New OAuth App**.
5. Set the following fields:
   - **Application name**: `CodeRabbit OAuth`
   - **Homepage URL**: `https://coderabbit.ai`
   - **Application description**: `OAuth application for signing into CodeRabbit`
   - **Authorization callback URL**: `https://app.coderabbit.ai/login`
6. Click **Register application**.

![GitHub Create OAuth App](/img/integrations/github-create-oauth-app.png)

Once the OAuth App has been created, click on **Generate a new client secret** under the 'Client secrets' section and copy the secret as it will be visible once only

Keep the following details handy:

- Client ID
- Client secret

![GitHub OAuth Client ID & Secret](/img/integrations/github-oauth-client-id-secret.png)

### **Step 3: GitHub App**

Navigate to your GitHub Self-Hosted Instance and follow the steps below to [create a GitHub App](https://docs.github.com/en/enterprise-server@latest/apps/creating-github-apps/registering-a-github-app/registering-a-github-app):

1. Sign in to your GitHub Enterprise account.
2. In the upper-right corner of any page, click your profile photo, then click **Settings**.
3. In the left sidebar, click **Developer settings** > **GitHub Apps**
4. Click **New GitHub App**.
5. Set the following fields:
   - **GitHub App name**: `CodeRabbit GitHub App`
   - **Description**: `GitHub App for CodeRabbit`
   - **Homepage URL**: `https://coderabbit.ai`
   - **Callback URL**: `https://app.coderabbit.ai/login`
   - **Request user authorization (OAuth) during installation**: `true`
   - **Webhook Active**: `true`
   - **Webhook URL**: `https://app.coderabbit.ai/githubHandler`
   - **Webhook secret**: Use a secure string and keep it handy.
   - **Permissions**:
     - **Repository permissions**:
       - **Checks**: Read-only
       - **Contents**: Read and write
       - **Discussions**: Read-only
       - **Issues**: Read and write
       - **Metadata**: Read-only
       - **Pull requests**: Read and write
     - **Organization permissions**:
       - **Members**: Read-only
     - **Events**:
       - Meta
       - Issue comment
       - Issues
       - Label
       - Public
       - Pull request
       - Pull request review
       - Pull request review comment
       - Pull request review thread
       - Push
       - Release
6. Click **Create GitHub App**.

Once the GitHub App has been created, click on **Generate a new client secret** under the 'Client secrets' section and copy the secret as it will be visible once only.

Scroll down and click on **Generate a private key** under the 'Private keys' section and download the PEM file.

Also, from the **Install App** tab, install the GitHub App to your organizations.

Keep the following details handy:

- App ID
- Client ID
- Client secret
- Webhook secret
- Private key

![GitHub App Client ID & Secret](/img/integrations/github-app-client-id-secret.png)

### **Step 4: CodeRabbit UI Onboarding**

Submit the details that were accumulated in previous steps:

- Host URL of your GitHub instance
- OAuth Client ID
- OAuth Client Secret
- GitHub App ID
- GitHub App Client ID
- GitHub App Client Secret
- GitHub App Webhook Secret
- GitHub App Private Key

Click on Submit and the login process will be initiated. 
On subsequent visits, your setup will be automatically detected, allowing for direct login.

### **Step 5: Whitelist CodeRabbit IP address**

Use this CodeRabbit IP if your instance requires IP whitelisting
`35.222.179.152/32`

VPN tunneling is available as an add-on package. Please reach out to us at
[contact@coderabbit.ai](mailto:contact@coderabbit.ai) if you are interested.
