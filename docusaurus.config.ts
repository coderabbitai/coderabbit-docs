import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import { EnumChangefreq } from "sitemap";

const baseUrl = "/";

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
    //[
    //  "./plugins/blog-plugin",
    //  {
    //    id: "blog",
    //    routeBasePath: "blog",
    //    path: "./blog",
    //    blogTitle: "CodeRabbit Blog",
    //    blogDescription: "Blog",
    //    tagsBasePath: "/tags",
    //    editLocalizedFiles: false,
    //    showReadingTime: true,
    //    blogSidebarCount: "ALL",
    //    blogSidebarTitle: "All our posts",
    //    blogListComponent: "@theme/BlogListPage",
    //    blogPostComponent: "@theme/BlogPostPage",
    //  },
    //],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/get-started",
            to: "/guides/configure-coderabbit",
          },
          {
            from: "/guides/customize-coderabbit",
            to: "/guides/configure-coderabbit",
          },
          {
            from: "/guides/prompt-customization",
            to: "/guides/review-instructions",
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
    image: "img/preview.png",
    editUrl: null,
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
        alt: "",
        src: "img/coderabbit_nav_logo.svg",
        href: "https://coderabbit.ai",
      },
      items: [
        {
          href: "https://discord.gg/GsXnASn26c",
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
    algolia: {
      // The application ID provided by Algolia
      appId: "4MKM4DJT5D",

      // Public API key: it is safe to commit it
      apiKey: "5573f324708f03a3bed6c15115e87941",

      indexName: "coderabbit",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
