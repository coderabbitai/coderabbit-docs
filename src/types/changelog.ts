export interface ChangelogFrontMatter {
	title: string
	date: string
	slug: string
	tags: string[]
	heroImage?: string
	author?: string
	authorImage?: string
	summary?: string
	hide_table_of_contents?: boolean
}

export interface ChangelogEntry {
	id: string
	metadata: ChangelogFrontMatter
	content: string
	permalink: string
}

export interface ChangelogListProps {
	limit?: number
	tag?: string
	year?: string
}
