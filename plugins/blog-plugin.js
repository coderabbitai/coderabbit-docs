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

const blogPluginExports = require("@docusaurus/plugin-content-blog")

const defaultBlogPlugin = blogPluginExports.default

async function blogPluginExtended(...pluginOptions) {
	const blogPluginInstance = await defaultBlogPlugin(...pluginOptions)

	return {
		// Add all properties of the default blog plugin so existing functionality is preserved
		...blogPluginInstance,
		/**
		 * Override the default `contentLoaded` hook to access blog posts data
		 */
		contentLoaded: async function (data) {
			const { content, actions } = data

			const allBlogPosts = content.blogPosts

			async function createRecentPostModule(blogPost, index) {
				return {
					// Inject the metadata you need for each recent blog post
					metadata: await actions.createData(
						`blogpost-metadata-${index}.json`,
						JSON.stringify({
							title: blogPost.metadata.title,
							description: blogPost.metadata.description,
							frontMatter: blogPost.metadata.frontMatter,
							image: blogPost.metadata.frontMatter.image,
							link: blogPost.metadata.permalink,
							date: blogPost.metadata.date,
						}),
					),

					// Inject the MDX excerpt as a JSX component prop
					// (what's above the <!-- truncate --> marker)
					Preview: {
						__import: true,
						// The markdown file for the blog post will be loaded by webpack
						path: blogPost.metadata.source,
						query: {
							truncated: true,
						},
					},
				}
			}

			data.actions.addRoute({
				path: "/featured-posts",
				exact: true,

				component: "@site/src/components/FeaturedPosts/FeaturedPosts.tsx",
				modules: {
					blogPosts: await Promise.all(
						allBlogPosts.map(createRecentPostModule),
					),
				},
			})

			// Call the default overridden `contentLoaded` implementation
			return blogPluginInstance.contentLoaded(data)
		},
	}
}

module.exports = {
	...blogPluginExports,
	default: blogPluginExtended,
}
