<p align="left">
  <a href="https://coderabbit.ai">
    <img src="static/img/coderabbit_nav_logo.svg" alt="CodeRabbit Logo" width="200"/>
  </a>
</p>

# CodeRabbit Documentation

Welcome to the official docs for [**CodeRabbit**](https://coderabbit.ai), the code review dev tool that helps you ship quality code faster.

[![Website](https://img.shields.io/badge/website-coderabbit.ai-blue)](https://coderabbit.ai)
[![Twitter Follow](https://img.shields.io/twitter/follow/coderabbitai?style=social)](https://twitter.com/coderabbitai)
[![Discord](https://img.shields.io/discord/invite-code?color=7289DA&label=Discord&logo=discord&logoColor=green)](https://discord.com/invite/GsXnASn26c)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/coderabbitai/coderabbit-docs/pulls)

## About CodeRabbit

> **CodeRabbit** is an AI-powered code reviewer that delivers context-aware feedback on pull requests within minutes, reducing the time and effort needed for manual code reviews. It provides a fresh perspective and catches issues that are often missed, enhancing the overall review quality.

- Automated code reviews
- Intelligent suggestions for code improvements
- Pull request summary
- Interactive chat
- Sequence diagrams
- Integration with popular version control platforms
- Support for multiple programming languages

## Getting Started with CodeRabbit

Follow these steps to and start using CodeRabbit:

1. **Sign Up**
   Visit [coderabbit.ai](https://coderabbit.ai/) and create your account.

2. **Connect Your Repository**
   Link your repository from one of the supported platforms:
   - GitHub
   - GitLab
   - Azure DevOps

3. **Configure Settings**
   Customize your preferences in the CodeRabbit dashboard as per your project's needs.

4. **Initiate Code Reviews**
   Start creating pull requests on your platform, and let CodeRabbit assist with intelligent code reviews.

# Configuring CodeRabbit

CodeRabbit offers flexible configuration options. There are two primary methods for configuring CodeRabbit:

1. Using the CodeRabbit UI (Web Interface)
2. Using a YAML Configuration File

## 1. Using the CodeRabbit UI

When you create an account and add repositories through the CodeRabbit web interface, you can configure settings for your organization and individual repositories.

### Steps:
1. Sign up or log in at [coderabbit.ai](https://coderabbit.ai)
2. Navigate to the "Organization Settings" section or "Repositories" section
3. Click "Add Repositories" to connect your Git repositories
4. Use the UI to configure settings for each repository or at the organization level

### Available UI Configuration Options:

#### General Settings:
- Review Language: Choose the natural language for CodeRabbit to write reviews (e.g., English (US))
- Tone Instructions: Set the tone for reviews and chat
- Early Access: Enable or disable early-access features
- Fine-tune Your Reviews: Allow CodeRabbit to learn from your usage and improve over time

#### Review Settings:
- Customize review profile, summary options, and automated review preferences

#### Chat Settings:
- Configure chat-related options

#### Knowledge Base:
- Set up and manage your organization's knowledge base

#### API Keys:
- Create and manage API keys for accessing the CodeRabbit API

> **Note:** Settings configured at the repository level will override organization-level settings.

## 2. Using a YAML Configuration File

For more advanced and version-controlled configuration, you can use a YAML file in your repository.

### Steps:
1. Create a file named `.coderabbit.yaml` in the root of your repository
2. Add your configuration options to the file
3. Commit and push the file to your repository

### Sample `.coderabbit.yaml`:

```yaml
# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json
language: "en-US"
early_access: false
reviews:
   profile: "chill"
   request_changes_workflow: false
   high_level_summary: true
   poem: true
   review_status: true
   collapse_walkthrough: false
   auto_review:
      enabled: true
      drafts: false
chat:
   auto_reply: true
```

### Key Configuration Options:

- `language`: Set the language for CodeRabbit's responses
- `early_access`: Enable/disable early access features
- `reviews`: Configure review behavior and style
- `chat`: Set chat-related options

For a complete list of configuration options, refer to the [CodeRabbit Configuration Schema](https://coderabbit.ai/integrations/schema.v2.json).

## Configuration Precedence

CodeRabbit uses the following order of precedence for configuration:

1. YAML file in the repository (highest precedence)
2. UI configuration for individual repositories
3. UI configuration for the organization (lowest precedence)

## Tips

- To convert existing UI configuration to YAML, use the `@coderabbitai configuration` command on any PR.
- Ensure the `.coderabbit.yaml` file is present in the feature branch for CodeRabbit to review.
- New pull requests or incremental commits will trigger CodeRabbit reviews once configured.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/coderabbit-ai/coderabbit-docs.git
cd coderabbit-docs
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
docusaurus start  
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Project Structure

```
coderabbit-docs/
  ├── blog/
  ├── docs/
  ├── src/
  │   ├── components/
  │   ├── css/
  │   └── pages/
  ├── static/
  ├── docusaurus.config.ts
  ├── sidebar.ts
  └── package.json
```

## Local Development

```
docusaurus start
```

This command starts a local development server and opens up a browser window.

## Building for Production

```
docusaurus build
```

This command generates static content into the `build` directory.


## Contributing

We welcome contributions to improve our documentation. Here are some guidelines:

1. Fork this repository
2. Create a new branch for your changes
3. Make all the changes
4. Test your changes locally
5. Submit a pull request with a clear description of what changes you did and why.

For more detailed contributing guidelines, please see our [CONTRIBUTING.md](./CONTRIBUTING.md) file.

---

For more information on using Docusaurus, please refer to the [official Docusaurus documentation](https://docusaurus.io/docs).

Built with ❤️ by the CodeRabbit team