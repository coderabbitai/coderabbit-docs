import { useBlogPost } from "@docusaurus/theme-common/internal"
import { AiDisclaimer } from "@site/src/components/AiDisclaimer"
import BlogPostItem from "@theme-original/BlogPostItem"
import { DiscussionEmbed } from "disqus-react"

export default function BlogPostItemWrapper(props) {
	// useBlogPost is a hook provided by Docusaurus to access blog post metadata and context
	const { metadata, isBlogPostPage } = useBlogPost()
	// Extract necessary properties from the metadata
	const { frontMatter, slug, title } = metadata
	// Check if comments are enabled in the front matter (default to true if not specified)
	// Check if ai disclaimer should be shown or not (default to true if not specified)
	const { comments = true, aiDisclaimer = true } = frontMatter

	return (
		<>
			<BlogPostItem {...props} />
			{isBlogPostPage && aiDisclaimer && <AiDisclaimer />}
			{isBlogPostPage && comments && (
				<DiscussionEmbed
					shortname="coderabbit"
					config={{
						url: slug,
						identifier: slug,
						title,
						language: "en_US",
					}}
				/>
			)}
		</>
	)
}
