---
title: FAQs
sidebar_label: FAQs
description: Accelerate Code Reviews with AI
image: "/preview_meta.jpg"
---

<head>
 <meta charSet="utf-8" />
  <meta name="title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta name="description" content="Accelerate Code Reviews with AI" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://coderabbit.ai/" />
  <meta property="og:title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta property="og:description" content="Accelerate Code Reviews with AI" />
  <meta property="og:image" content="/preview_meta.jpg" />

  <meta name="twitter:image" content="https://coderabbit.ai/preview_meta.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta name="twitter:description" content="Accelerate Code Reviews with AI" />
</head>

#### **1. How accurate is CodeRabbit's review?**

Early adoption results for CodeRabbit have been highly promising, demonstrating significant accuracy in code reviews. However, it's crucial to understand that AI is an evolving field, and absolute 100% accuracy can't be guaranteed. Our technology is continuously learning and improving, aiming for the highest possible accuracy in reviews.

#### **2. Which programming languages does CodeRabbit support?**

CodeRabbit is designed to work with all programming languages. However, the proficiency of our AI models might vary between languages, which could slightly affect the accuracy of the review.

#### **3. Does CodeRabbit store my code or use it for training language models?**

We train our system using open source projects. For private repositories, neither CodeRabbit nor OpenAI LLMs use your code for training purposes.

#### **4. What Large Language Models does CodeRabbit use?**

CodeRabbit currently utilizes Open AI's GPT 4 and GPT 3.5. We're researching and testing upcoming LLMs to ensure we're offering the most precise reviews possible.

#### **5. Can I customize CodeRabbit?**

Reviews are customizable. For information, check out our [Get Started page](/get-started/signup).

#### **6. Can I choose a language other than English for the reviews?**

CodeRabbit supports most widely-used languages. You can configure this in the repository settings.

#### **7. What access does CodeRabbit need to my repositories?**

CodeRabbit requests minimal access to perform code reviews and post comments on Pull Requests. On GitHub, it requires read access to metadata, code, discussions, issues, and read/write access to the pull requests. On GitLab, it requires read access to the repository, and the CodeRabbit Bot user requires a developer role.

#### **8. How can I add or remove users for my subscription?**

To manage users, log in to CodeRabbit and navigate to subscriptions. You can add or remove users as needed.

#### **9. How can I interact with the CodeRabbit bot?**

To interact with CodeRabbit's bot, reply to the CodeRabbit Comment. If there are team members collaborating on pull requests, the bot stays silent by default but can be engaged by tagging **@Coderabbitai**. This feature allows you to provide context, generate test cases, or ask for specific code suggestions, all within the context of your code lines or entire files.

#### **10. Can individual developers use CodeRabbit?**

Absolutely! Whether you're an individual developer or part of an organization, CodeRabbit can be your coding assistant, providing you with invaluable suggestions.

#### **11. Which branches are the pull requests reviewed on?**

CodeRabbit reviews pull requests on the default branch.

#### **12. Is it possible for CodeRabbit to include additional branches for review?**

Yes, you can change it under the repository settings.

#### **13. CodeRabbit Usage Limits**

There are hourly rate limits for each developer per repository:

-   Number of files reviewed per hour: 200
-   Number of reviews : 3 back to back reviews followed by 4 reviews/hour
-   Number of conversations: 25 back to back messages followed by 50 messages/hr


In-trial and open-source plans have lower rate limits than the paid plan. In all cases, we re-allow further reviews/conversations after a brief timeout.

Please note that we're continually innovating and enhancing our application with new capabilities. Stay tuned and follow us for updates as new exciting features are built. We're committed to making your experience with CodeRabbit even better.

If you have further questions or need additional information, don't hesitate to reach out to us at [contact@coderabbit.ai](mailto:contact@coderabbit.ai).
