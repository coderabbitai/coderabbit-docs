<p align="left">
  <a href="https://coderabbit.ai">
    <img src="static/img/coderabbit_nav_logo.svg" alt="CodeRabbit Logo" width="200"/>
  </a>
</p>

# CodeRabbit Documentation

Welcome to the official docs for [**CodeRabbit**](https://coderabbit.ai), the code review dev tool that helps you ship quality code faster.

[![Website](https://img.shields.io/badge/website-coderabbit.ai-blue)](https://coderabbit.ai)
[![Twitter Follow](https://img.shields.io/twitter/follow/coderabbitai?style=social)](https://twitter.com/coderabbitai)
[![Discord](https://img.shields.io/discord/1134356397673414807?color=7289DA&label=Discord&logo=discord&logoColor=green)](http://discord.gg/coderabbit)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/coderabbitai/coderabbit-docs/pulls)
[![Node.js CI](https://github.com/coderabbitai/coderabbit-docs/actions/workflows/node.js.yaml/badge.svg)](https://github.com/coderabbitai/coderabbit-docs/actions/workflows/node.js.yaml)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/coderabbitai/coderabbit-docs?labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit%20Reviews)

## About CodeRabbit

> **CodeRabbit** is an AI-powered code reviewer that delivers context-aware feedback on pull requests within minutes, reducing the time and effort needed for manual code reviews. It provides a fresh perspective and catches issues that are often missed, enhancing the overall review quality.

- Automated code reviews
- Intelligent suggestions for code improvements
- Pull request summary
- Interactive chat
- Sequence diagrams
- Integration with popular version control platforms
- Support for all programming languages

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

## Getting Started

1. Make sure that you have the following prerequisites installed:

   - [Node.js](https://nodejs.org/)
   - [pnpm](https://pnpm.io/installation)

1. Clone this repository:

   ```sh
   git clone https://github.com/coderabbit-ai/coderabbit-docs.git
   cd coderabbit-docs
   ```

1. Install Node.js dependencies using `pnpm`:

   ```sh
   pnpm install
   ```

1. Start the development server:

   ```sh
   pnpm start
   ```

   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Project Structure

```sh
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

```sh
docusaurus start
```

This command starts a local development server and opens up a browser window.

## Building for Production

```sh
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
