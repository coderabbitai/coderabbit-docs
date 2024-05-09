---
title: CodeRabbit for Self-Hosted GitHub
description: Integrate CodeRabbit with your Self-Hosted GitHub instance.
sidebar_label: Self-Hosted GitHub
---

This page guides you through the process of integrating your CodeRabbit with your self-hosted GitHub instance.

1. [Create a GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app) in your Organization or User account.

    - Set the following Repository permissions:
        - Checks: Read-only
        - Contents: Read and write
        - Discussions: Read-only
        - Issues: Read & write
        - Metadata: Read-only
        - Pull requests: Read & write

    - Set the following Organization permissions:
        - Members: Read-only

    - Set the following events:
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

2. Get the following information from the GitHub App:

    - App ID
    - Client ID
    - Client Secret
    - Webhook Secret

3. Prepare a `.env` file with the following information:

    ```bash
    OPENAI_API_KEYS=<openai-key>

    TEMP_PATH=/cache

    AST_GREP_RULES_PATH=/home/jailuser/ast-grep-rules
    AST_GREP_ESSENTIALS=ast-grep-essentials

    GH_WEBHOOK_SECRET=<webhook-secret>
    GITHUB_APP_CLIENT_ID=<github-app-client-id>
    GITHUB_APP_CLIENT_SECRET=<github-app-client-secret>
    GITHUB_APP_ID=<github-app-id>
    GITHUB_APP_PEM_FILE=<flattened-pem-file>
    ```

    > Note: For the `GITHUB_APP_PEM_FILE`, you need to flatten the PEM file by replacing newlines with `\n`.

4. Pull the CodeRabbit Docker image. The CodeRabbit Docker image is not available for public use. Please contact us at [contact@coderabbit.ai](mailto:contact@coderabbit.ai) for access.

    ```bash
    cat coderabbit.json | docker login -u _json_key --password-stdin https://gcr.io
    docker pull gcr.io/coderabbitprod/coderabbit-agent:latest
    ```

    > Note: The `coderabbit.json` file is a service account key file that will be shared with you.

5. Host the image on a server, serverless function, or a container environment and expose the port `8080`.

6. Install the GitHub App on your GitHub organization or user account and point the Webhook URL to the hosted CodeRabbit instance, for example, `http://127.0.0.1:8080/github_webhooks`. GitHub will send events to the CodeRabbit instance.
