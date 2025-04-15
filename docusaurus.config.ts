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

import { themes as prismThemes } from "prism-react-renderer"
import { EnumChangefreq } from "sitemap"

import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"

const baseUrl = "/"

const config: Config = {
	title: "CodeRabbit",
	staticDirectories: ["static"],
	tagline: "AI-powered Code Reviews",
	favicon: "img/favIcon.png",

	// Set the production url of your site here
	url: "https://docs.coderabbit.ai/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: baseUrl,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "coderabbit", // Usually your GitHub org/user name.
	projectName: "coderabbit-docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
	onDuplicateRoutes: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	plugins: [
		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{
						from: "/get-started",
						to: "/getting-started/quickstart/",
					},
					{
						from: "/about/features",
						to: "/",
					},
					{
						from: "/about/pricing",
						to: "/",
					},
					{
						from: "/about/support",
						to: "/getting-started/support",
					},
					{
						from: "/guides/customize-coderabbit",
						to: "/getting-started/configure-coderabbit",
					},
					{
						from: "/guides/prompt-customization",
						to: "/guides/review-instructions",
					},
					{
						from: "/guides/configure-coderabbit",
						to: "/getting-started/configure-coderabbit",
					},
					{
						from: "/integrations/saas-gitlab",
						to: "/platforms/gitlab-com",
					},
					{
						from: "/integrations/self-hosted-gitlab",
						to: "/platforms/self-hosted-gitlab",
					},
					{
						from: "/integrations/self-hosted-github",
						to: "/platforms/github-enterprise-server",
					},
					{
						from: "/platforms/saas-azure-devops",
						to: "/platforms/azure-devops",
					},
					{
						from: "/platforms/saas-gitlab",
						to: "/platforms/gitlab-com",
					},
					{
						from: "/platforms/self-hosted-github",
						to: "/platforms/github-enterprise-server",
					},
					{
						from: "/configure-coderabbit",
						to: "/getting-started/configure-coderabbit",
					},
				],
			},
		],
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("tailwindcss"))
					postcssOptions.plugins.push(require("autoprefixer"))
					return postcssOptions
				},
			}
		},
		[
			"@inkeep/cxkit-docusaurus",
			{
				SearchBar: {
					baseSettings: {
						apiKey: process.env.INKEEP_API_KEY,
						primaryBrandColor: "#FF570A",
					},
					aiChatSettings: {
						chatSubjectName: "CodeRabbit",
						aiAssistantAvatar: "https://www.coderabbit.ai/favicon.ico",
						getHelpOptions: [
							{
								name: "Discord",
								icon: {
									builtIn: "FaDiscord",
								},
								action: {
									type: "open_link",
									url: "https://discord.gg/coderabbit",
								},
							},
							{
								name: "Contact Us",
								icon: {
									builtIn: "IoChatbubblesOutline",
								},
								action: {
									type: "open_link",
									url: "https://www.coderabbit.ai/contact-us",
								},
							},
						],
						exampleQuestions: [
							"What is CodeRabbit?",
							"How to integrate CodeRabbit with GitHub?",
							"How to set up a AI Code Review?",
						],
					},
				},
			},
		],
	],

	presets: [
		[
			"classic",
			{
				docs: {
					editUrl: "https://github.com/coderabbitai/coderabbit-docs/edit/main/",
					sidebarPath: "./sidebars.ts",
					path: "docs",
					routeBasePath: "/",
					breadcrumbs: true,
					showLastUpdateTime: true,
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
				sitemap: {
					changefreq: "weekly" as EnumChangefreq,
					priority: 0.5,
					ignorePatterns: ["/tags/**"],
					filename: "sitemap.xml",
				},
				googleTagManager: {
					containerId: "GTM-5BWLXJRC",
				},
			} satisfies Preset.Options,
		],
	],

	themes: ["docusaurus-json-schema-plugin"],

	scripts: [
		"https://buttons.github.io/buttons.js",
		"https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
		"/docs/js/code-block-buttons.js",
		"https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js",
		{
			src: "/js/segment.js",
			async: false,
		},
		{
			src: "https://js.hs-scripts.com/43613284.js",
			type: "text/javascript",
			id: "hs-script-loader",
			async: true,
			defer: true,
		},
		{
			src: "https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js",
			async: true,
		},
	],

	themeConfig: {
		image: "img/preview.png",
		colorMode: {
			defaultMode: "light",
			disableSwitch: false,
			respectPrefersColorScheme: false,
		},
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		metadata: [{ name: "twitter:card", content: "summary_large_image" }],
		navbar: {
			title: "",
			hideOnScroll: true,
			logo: {
				alt: "CodeRabbit",
				src: "img/logo/bw_coderabbit.svg",
				srcDark: "img/logo/white_coderabbit.svg",
				href: "https://coderabbit.ai",
				target: "_self",
			},
			items: [
				{
					label: "Docs",
					position: "left",
					to: "/",
					className: "navbar-link-active",
				},
				{
					href: "https://coderabbit.ai/blog",
					label: "Blog",
					position: "left",
				},
				{
					href: "https://discord.gg/coderabbit",
					className: "navbar-icon-link discord-link",
					"aria-label": "Discord",
					position: "right",
				},
				{
					href: "https://github.com/coderabbitai/coderabbit-docs",
					className: "github-link",
					"aria-label": "GitHub",
					position: "right",
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		algolia: {
			// The application ID provided by Algolia
			appId: "4MKM4DJT5D",

			// Public API key: it is safe to commit it
			apiKey: "b1d63b99cbda8ec3668777e644ecefa2",

			indexName: "coderabbit",

			// Optional: see doc section below
			contextualSearch: false,

			// Optional: Algolia search parameters
			searchParameters: {},

			// Optional: path for search page that enabled by default (`false` to disable it)
			searchPagePath: "search",
		},
	} satisfies Preset.ThemeConfig,
}

export default config
