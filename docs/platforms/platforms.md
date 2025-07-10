---
title: Add CodeRabbit to your repository
description: Conceptual overview of integrating CodeRabbit with your Git platform
---

This page presents an overview of integrating CodeRabbit with your Git platform.
For a conceptual overview of CodeRabbit, see [Introduction](/).

## Use CodeRabbit with Git platforms

CodeRabbit integrates with the following Git platforms:

- [GitHub.com](/platforms/github-com)
- [GitHub Enterprise Server](/platforms/github-enterprise-server)
- [GitLab.com](/platforms/gitlab-com)
- [Self-managed GitLab](/platforms/self-hosted-gitlab)
- [Azure DevOps](/platforms/azure-devops)
- [BitBucket Cloud](/platforms/bitbucket-cloud)

The exact steps for each platform are outlined in the pages linked above. That said, integrating any
Git platform with CodeRabbit follows this general pattern:

1. Log into CodeRabbit using your Git platform account.

1. Add the organizations containing the repositories that you want CodeRabbit to work with. You generally need ownership-level permissions with these organizations. (Different Git platforms might call their organizations different
   things, such as "groups" in GitLab and "workspaces" in BitBucket.)

1. Create a dedicated CodeRabbit service account on your Git platform, if needed. We handle
   this step for you on some platforms, such as GitHub.com.

1. Grant CodeRabbit the permissions that it needs to work with one or more
   of the repositories that you have ownership-level access to.

After you finish integrating CodeRabbit with one or more repositories, you can [start using CodeRabbit immediately](/guides/code-review-overview) using its default configuration, which automatically reviews or summarizes new pull requests. You can also [customize CodeRabbit’s configuration](/guides/configuration-overview) to suit your team's needs.

## What's next {#whats-next}

- [Integrate CodeRabbit with GitHub.com](/platforms/github-com)
- [Integrate CodeRabbit with GitHub Enterprise Server](/platforms/github-enterprise-server)
- [Integrate CodeRabbit with GitLab.com](/platforms/gitlab-com)
- [Integrate CodeRabbit with Self-managed GitLab](/platforms/self-hosted-gitlab)
- [Integrate CodeRabbit with Azure DevOps](/platforms/azure-devops)
- [Integrate CodeRabbit with BitBucket Cloud](/platforms/bitbucket-cloud)
