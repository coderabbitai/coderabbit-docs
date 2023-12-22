import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

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
        "introduction/introduction",
        {
            type: "category",
            label: "About",
            collapsed: false,
            items: ["about/features", "about/pricing", "about/support"],
        },
        {
            type: "category",
            label: "Get Started",
            items: [
                "get-started/signup",
                "get-started/add-repo",
                // "get-started/customize-coderabbit",
                // "get-started/prompt-customization",
                "get-started/analytics",
                // "get-started/coderabbit-commands",
                ,
            ],
        },
        {
            type: "category",
            label: "Guides",
            items: [
                "guides/customize-coderabbit",
                "guides/prompt-customization",
                "guides/coderabbit-commands",
            ],
        },
        "faq/faq",
    ],
};

export default sidebars;
