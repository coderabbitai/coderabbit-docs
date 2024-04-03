---
slug: fluxninja-joins-coderabbit
title: FluxNinja joins CodeRabbit
description:
  CodeRabbit has acquired FluxNinja, a startup that provides a platform for
  building scalable generative AI applications.
authors: [gur, vishu]
tags:
  [
    "AI",
    "Acquisition",
    "Generative AI",
    "Code Review",
    "Load Management",
    "Rate Limiting",
    "Caching",
    "Scheduler",
  ]
image: /img/blog-previews/fluxninja-acquisition.png
---

![FluxNinja joins CodeRabbit](/img/blog-previews/fluxninja-acquisition.png)

We are excited to announce that CodeRabbit has acquired
[FluxNinja](https://fluxninja.com), a startup that provides a platform for
building scalable generative AI applications. This acquisition will allow us to
ship new use cases at an industrial-pace while sustaining our rapidly growing
user base. FluxNinja's Aperture product provides advanced rate & concurrency
limiting, caching, and request prioritization capabilities that are essential
for reliable and cost-effective AI workflows.

<!--truncate-->

Since our launch,
[Aperture's open-source](https://github.com/fluxninja/aperture) core engine has
been critical to our infrastructure. Our initial use case centered around
[mitigating aggressive rate limits](../openai-rate-limits-2023-10-23/blog.md)
imposed by OpenAI, allowing us to prioritize paid and real-time chat users
during peak load hours while queuing requests from the free users. Further, we
used Aperture's
[caching and rate-limiting capabilities](../how-we-built-cost-effective-generative-ai-application-2023-12-23/blog.md)
to manage costs that in turn allowed us to offer open-source developers a fully
featured free tier by minimizing abuse. These capabilities allowed us to scale
our user base without ever putting up a waitlist and at a price point that is
sustainable for us. With Aperture's help, CodeRabbit has scaled to over 100K
repositories and several thousand organizations under its review in a short
period.

We started CodeRabbit with a vision to build an AI-first developer tooling
company from the ground up. Building enterprise-ready applied AI tech is unlike
any other software engineering challenge of the past. Based on our learnings
while building complex workflows, it became apparent that we need to invest in a
platform that can solve the following problems:

- Prompt rendering: Prompt design and rendering is akin to responsive web
  design. Web servers render pages based on the screen size and other
  parameters, for example, on a mobile device, navigation bars are usually
  rendered as hamburger menus, making it easier for human consumption.
  Similarly, we need a prompt server that can render prompts based on the
  context windows of underlying models and prioritize the packing of context
  based on business attributes, making it easier for AI consumption. It's not
  feasible to include the entire repository, past conversations, documentation,
  learnings, etc. in a single code review prompt because of the context window
  size limitations. Even if it was possible, AI models exhibit poor recall when
  doing an inference on a completely packed context window. While tight packing
  may be acceptable for use cases like chat, it’s not for use cases like code
  reviews that require accurate inferences. Therefore, it's critical to render
  prompts in such a way that the quality of inference is high for each use-case,
  while being cost-effective and fast. In addition to packing logic, basic
  guardrails are also needed, especially when rendering prompts based on inputs
  from end-users. Since we provide a free service to public repositories, we
  have to ensure that our product is not misused beyond its intended purpose or
  tricked into divulging sensitive information, which could include our base
  prompts.

- Validation & quality checks: Generative AI models consume text and output
  text. On the other hand, traditional code and APIs required structured data.
  Therefore, the prompt service needs to expose a RESTful or gRPC API that can
  be consumed by the other services in the workflow. We touched upon the
  rendering of prompts based on structured requests in the previous point, but
  the prompt service also needs to parse, validate responses into structured
  data and measure the quality of the inference. This is a non-trivial problem,
  and multiple tries are often required to ensure that the response is thorough
  and meets the quality bar. For instance, we found that when we pack multiple
  files in a single code review prompt, AI models often miss hunks within a file
  or miss files altogether, leading to incomplete reviews.

- Observability: One key challenge with generative AI and prompting is that it's
  inherently non-deterministic. The same prompt can result in vastly different
  outputs, which can be frustrating, but this is precisely what makes AI systems
  powerful in the first place. Even slight variations in the prompt can result
  in vastly inferior or noisy outputs, leading to a decline in user engagement.
  At the same time, the underlying AI models are ever-evolving, and the
  established prompts drift over time as the models get regular updates.
  Traditional observability is of little use here, and we need to rethink how we
  classify and track generated output and measure quality. Again, this is a
  problem that we have to solve in-house.

While FluxNinja's Aperture project was limited to solving a different problem
around load management and reliability, we found that the underlying technology
and the team's expertise were a perfect foundation for building the AI platform.
Prompt engineering is in its nascent stage but is emerging as a joystick for
controlling AI behavior. Packing the context window with relevant documents
(retrieval augmented generation, aka RAG) is also emerging as the preferred way
of providing proprietary data compared to fine-tuning the model. Most AI labs
focus on increasing the context window rather than making fine-tuning easier or
cheaper. Despite the emergence of these clear trends, applied AI systems are
still in their infancy. None of the recent AI vendors seem to be building the
"right" platform, as most of their focus has been on background/durable
execution frameworks, model routing proxies/gateways, composable RAG pipelines,
and so on. Most of these approaches fall short of what a real-world AI workflow
requires. The right abstractions and best practices will still have to appear,
and the practitioners themselves will have to build them. AI platforms will be a
differentiator for AI-first companies, and we are excited to tackle this problem
head-on with a systems engineering mindset.

We are excited to have the FluxNinja team on board and to bring our users the
best-in-class AI workflows. We are also happy to welcome
[Harjot Gill](https://www.linkedin.com/in/harjotsgill/), the founder of
FluxNinja, and the rest of the team to CodeRabbit.
