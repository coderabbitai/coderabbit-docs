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
