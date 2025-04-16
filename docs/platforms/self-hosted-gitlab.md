---
title: Integrating CodeRabbit for Self-Managed GitLab
description: Learn how to integrate CodeRabbit with your Self-Managed GitLab instance.
sidebar_label: Self-Managed GitLab
sidebar_position: 4
---

This page guides you through the process of integrating your Self-Managed GitLab
with CodeRabbit.

To initiate the integration, we require specific information. This is essential
for the initial setup of CodeRabbit within your domain. Once this setup is
complete, you can log in directly using the OAuth2 flow.

CodeRabbit supports GitLab `16.x` and above. Version `15.x` may experience
unexpected issues such as review comments not being posted or the sign-up
process not working at all. While we won't block the integration, we recommend
upgrading your GitLab instance to obtain the intended experience.

### **Step 1: Getting Started**

**Visit CodeRabbit:** Visit our [Login](https://app.coderabbit.ai/login?free-trial) page and
select Self-Hosted GitLab

![CodeRabbit login](/img/integrations/login-self-hosted-gitlab.png)

### Step 2: Enter your Self-Managed GitLab URL

On this page, enter the URL of your self-managed GitLab instance and click
submit. Once, you submit, we check our database for a record of your
organization and if we find an existing one, we are starting the login process.

![Self-hosted Gitlab enterprise connection page](/img/integrations/self-hosted-gitlab-host-url.png)

If the self-managed GitLab instance is not found, we initiate the onboarding
process, which can be either manual or automated.

### **Step 3: Onboarding Manual or Automated**

#### 1. Automated onboarding

![Self-managed GitLab connection page](/img/integrations/automated-onboarding.png)

#### **Why do we need the Admin Access Token?**

Admin access token is required to set up a new CodeRabbit bot user within your
self-managed instance. The token is needed only once during the initial setup
process. Once the token is generated, you can set its minimum expiration period.
This is the standard approach used by other products in this category. This is
not automatically installing the CodeRabbit app across all projects. You will
add CodeRabbit manually on the projects you wish, as the next step.

#### 2. Manual onboarding

For the manual onboarding process we need to create the
[CodeRabbit user](#creating-coderabbit-user) and the
[OAuth2 GitLab application](#creating-oauth2-application).
![Self-managed GitLab connection page](/img/integrations/manual-onboarding.png)

#### **Creating CodeRabbit user**

This feature will work with any user from your organization, but we strongly
suggest creating a dedicated user called **CodeRabbitAI**. This ensures clarify
about which user is used for our application and allows for better fine-grained
access control.

To create users in GitLab, log in with an instance admin account and follow the
steps provided in the
[GitLab documentation](https://docs.gitlab.com/ee/user/profile/account/create_accounts.html#create-users-in-admin-area).
After the user is created, you can retrieve the **User ID** from that user's
profile and generate an [**access token**](#generating-personal-access-token).
The access token is used to post reviews on merge requests.

We recommend using the CodeRabbit [logo](/img/integrations/logo.png) as the profile picture to ensures easy recognition.

#### **Creating OAuth2 application**

For self-managed GitLab, we recommend creating an instance-wide application
unless you want the reviews to be limited to a single group or user.

Please follow the steps outlined in the
[GitLab documentation](https://docs.gitlab.com/ee/integration/oauth_provider.html#create-an-instance-wide-application)
for creating the application.

Requirements:

1. Scopes: `api read_user email openid`
2. Callback URL: `https://app.coderabbit.ai/login`

#### **Generating Personal Access token**

GitLab offers an option to generate a personal access token for adding a new
user and setting up the application in the self-managed instance. To generate
the token, please follow the process outlined below:

1. Login to your self-hosted instance. For
   [automated onboarding](#1-automated-onboarding) ensure you have admin rights.
2. On the left sidebar, select your avatar.
3. Select Edit profile.
4. On the left sidebar, select Access Tokens.
5. Select Add new token.
6. Enter a name and expiry date for the token. We need this for the initial
   setup, so the minimum expiry time is sufficient.
7. If you do not enter an expiry date, the expiry date is automatically set to
   365 days later than the current date.
8. Make sure, you select the scopes: `api read_api read_user`
9. Select Create personal access token.
10. Please note down this token as this will be visible one time only

![GitLab personal access token configuration page](/img/integrations/admin-access-token.png)

### **Step 4: Paste the details and click submit**

- Submit the form.
- We will handle the setup process for you.
- On subsequent visits, your setup will be automatically detected, allowing for
  direct login. ![CodeRabbit authentication options page](/img/integrations/self-hosted-page.png)

### **Step 5: Whitelist CodeRabbit IP address**

Use this CodeRabbit IP if your instance requires IP whitelisting
`35.222.179.152/32` and `34.170.211.100/32`.

VPN tunneling is available as an add-on package. Please reach out to us at
[contact@coderabbit.ai](mailto:contact@coderabbit.ai) if you are interested.
