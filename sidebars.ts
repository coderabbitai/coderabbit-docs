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
        "get-started/analytics",
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
    {
      type: "category",
      label: "Integrations",
      items: [
        {
          type: "category",
          label: "Jira",
          items: ["integrations/Jira/setup", "integrations/Jira/link"],
        },
        {
          type: "category",
          label: "Linear",
          items: ["integrations/Linear/setup", "integrations/Linear/link"],
        },
        "integrations/self-hosted-gitlab",
      ],
    },
    "faq/faq",
  ],
};

export default sidebars;
