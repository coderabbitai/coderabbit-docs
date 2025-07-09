# Contributing Guide to CodeRabbit Documentation

Welcome, and thank you for considering contributing to the **CodeRabbit Documentation**. This guide will help you get started and ensure a smooth contribution process.

## Before You Start ✋

The CodeRabbit documentation repository is an open-source project aimed at creating clear, detailed, and developer-friendly documentation for CodeRabbit. Whether you're improving existing docs or adding new content, your contributions are valued.

## How Can I Contribute?

There are various ways you can contribute:

- **Fixing Typos or Improving Grammar**: Even small fixes like spelling errors or improving sentence structure are appreciated.
- **Clarifying Existing Documentation**: If something is unclear, feel free to rewrite for better understanding and give a clear explanation in PR.
- **Suggesting Structural Improvements**: Propose changes that can improve the structure and navigation of the docs.

### Join the Community

- Connect with other contributors by joining our [CodeRabbit Discord Server](https://discord.gg/coderabbit). Feel free to introduce yourself in the `#intros` channel.

## How to Contribute? 👨‍💻

### Fork and Pull Request Flow ⏳

1. **Fork** the repository to your GitHub account by visiting [CodeRabbit Docs GitHub repo](https://github.com/coderabbitai/coderabbit-docs).
2. **Clone** your fork locally:

   ```shell
   git clone git@github.com:YOUR_USERNAME/coderabbit-docs.git

   ```

3. Create a new branch:

   ```shell
   git checkout -b your_username/feature_description
   ```

4. Implement the changes then commit and push the changes from your working branch:

   ```shell
   git commit -m "docs: add explanation about [section]"
   git push origin your_username/feature_description
   ```

## Commit Message Format 💬

We require all commits in this repository to adhere to the following commit message format.

```txt
<type>: <description> (#<issue number>)

[optional body]
```

This format is based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Please refer to the Conventional Commits specification for more details.

## Keeping your Fork Up-to-Date 🆕

To keep your fork updated with the latest changes from the upstream repository:

```shell
git remote add upstream https://github.com/coderabbitai/coderabbit-docs.git
git fetch upstream
git rebase upstream/main
```

## Contributing Best Practices 🚨

- Work on **one issue at a time** to avoid confusion.
- If you need help, post in the `#support` channel on Discord.
- Test your changes locally before submitting a PR.
- While AI is cool, minimize its use for _direct team communication_. We value concise, genuine exchanges over scripted messages.
