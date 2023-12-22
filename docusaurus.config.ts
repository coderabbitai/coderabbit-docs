import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import { EnumChangefreq } from "sitemap";

// const baseUrl = "/docs";
// const baseUrl = "/blog";
const baseUrl = "/";

const config: Config = {
    title: "CodeRabbit",
    staticDirectories: ["public", "static"],
    tagline: "AI-powered Code Reviews",
    favicon:
        "https://images.saasworthy.com/coderabbit_44328_logo_1689061503_adc8g.jpg",

    // Set the production url of your site here
    url: "https://coderabbit.ai/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: baseUrl,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

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
                        to: "/docs/get-started/signup",
                        from: "/docs/get-started",
                    },
                ],
            },
        ],
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/docs",
                    breadcrumbs: true,
                },
                blog: {
                    routeBasePath: "/blog",
                    showReadingTime: true,
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
                sitemap: {
                    changefreq: "weekly" as EnumChangefreq,
                    priority: 0.5,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
                },
            } satisfies Preset.Options,
        ],
    ],

    scripts: [
        "https://buttons.github.io/buttons.js",
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
        "/docs/js/code-block-buttons.js",
        `https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js`,
        {
            src: "https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js",
            async: true,
        },
    ],

    themeConfig: {
        // Replace with your project's social card
        editUrl: null,
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        metadata: [
            { name: "keywords", content: "ai, blog" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        headTags: [
            // Declare a <link> preconnect tag
            {
                tagName: "link",
                attributes: {
                    rel: "preconnect",
                    href: "https://coderabbit.ai/blog/coderabbit-deep-dive",
                },
            },
            // Declare some json-ld structured data
        ],
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "",
            hideOnScroll: true,
            logo: {
                alt: "",
                src: "img/coderabbit_nav_logo.svg",
                href: "https://coderabbit.ai",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Docs",
                    to: "/docs/introduction",
                },
                {
                    // type: "docSidebar",
                    // sidebarId: "blogsSidebar",
                    position: "left",
                    label: "Blog",
                    to: "/blog",
                },
                {
                    href: "https://discord.gg/CVtemB5c",
                    className: "header-discord-link",
                    "aria-label": "Discord",
                    position: "right",
                    label: "Discord",
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
