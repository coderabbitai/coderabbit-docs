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
