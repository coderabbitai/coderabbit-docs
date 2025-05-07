/*
 * Copyright 2024 CodeRabbit AI Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	docsSidebar: [
		{
			type: "category",
			collapsed: false,
			label: "Get started with CodeRabbit",
			items: ["overview/introduction", "getting-started/quickstart"],
		},
		{
			type: "category",
			collapsed: false,
			label: "Add CodeRabbit to your repository",
			items: [
				"platforms/platforms",
				{
					type: "category",
					collapsed: true,
					label: "Supported Git platforms",
					items: [
						"platforms/github-com",
						"platforms/github-enterprise-server",
						"platforms/gitlab-com",
						"platforms/self-hosted-gitlab",
						"platforms/azure-devops",
						"platforms/bitbucket-cloud",
					],
				},
				"getting-started/adding-organizations",
				"getting-started/upgrading-permissions",
				{
					type: "category",
					collapsed: true,
					label: "Self-host CodeRabbit",
					items: [
						"self-hosted/github",
						"self-hosted/gitlab",
						"self-hosted/azure-devops",
						"self-hosted/bitbucket",
					],
				},
			],
		},
		{
			type: "category",
			collapsed: false,
			label: "Configure CodeRabbit",
			items: [
				"getting-started/configure-coderabbit",
				"integrations/knowledge-base",
				"guides/review-instructions",
				"tools/tools",
			],
		},
		{
			type: "category",
			collapsed: false,
			label: "Review pull requests",
			items: [
				"guides/commands",
				"guides/agent_chat",
				{
					type: "category",
					collapsed: false,
					label: "Analyze and improve your code",
					items: [
						"integrations/code-graph-analysis",
						"finishing-touches/docstrings",
					],
				},
			],
		},
		{
			type: "category",
			collapsed: false,
			label: "Create and resolve issues",
			items: [
				"integrations/issue-integrations",
				"guides/issue-chat",
				"guides/issue-creation",
				"guides/linked-issues",
			],
		},
		{
			type: "category",
			collapsed: false,
			label: "Generate reports",
			items: [
				"guides/ondemand-reports",
				"guides/custom-reports",
				"guides/scheduled-reports",
			],
		},
		{
			type: "category",
			collapsed: false,
			label: "Reference",
			items: [
				{
					type: "link",
					label: "CodeRabbit API",
					href: "https://api.coderabbit.ai/api/swagger/",
				},
				{
					type: "category",
					label: "Supported tools",
					collapsed: true,
					items: [
						"tools/actionlint",
						"tools/biome",
						"tools/buf",
						"tools/checkov",
						"tools/circleci",
						"tools/cppcheck",
						"tools/detekt",
						"tools/eslint",
						"tools/gitleaks",
						"tools/golangci-lint",
						"tools/hadolint",
						"tools/languagetool",
						"tools/markdownlint",
						"tools/oxlint",
						"tools/phpstan",
						"tools/pipeline-remediation",
						"tools/pmd",
						"tools/prisma-lint",
						"tools/regal",
						"tools/rubocop",
						"tools/ruff",
						"tools/semgrep",
						"tools/shellcheck",
						"tools/sqlfluff",
						"tools/swiftlint",
						"tools/yamllint",
					],
				},
			],
		},
		{
			type: "category",
			collapsed: false,
			label: "Resources",
			items: [
				"getting-started/support",
				"getting-started/subscription-management",
				"overview/why-coderabbit",
				"faq",
				"early-access",
				"future-development",
				"changelog",
			],
		},
	],
}

export default sidebars
