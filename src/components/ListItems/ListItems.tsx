import React from "react"
import styles from "./ListItems.module.css"

interface ListItemsProps {
	items: React.ReactNode[]
	className?: string
	orderedList?: boolean
	nested?: boolean
	nestingLevel?: number
}

export const ListItems: React.FC<ListItemsProps> = ({
	items,
	className,
	orderedList = false,
	nested = false,
	nestingLevel = 1,
}) => {
	const ListTag = orderedList ? "ol" : "ul"
	
	// Determine list class based on nesting level
	let listClassName = orderedList ? styles.crOrderedList : styles.crFeatureList
	if (nested && nestingLevel > 1) {
		listClassName = `${listClassName} ${styles.crNestedLevel2}`
	}

	// Use different wrapper class for nested lists
	const wrapperClassName = nested 
		? `${styles.crNestedList} ${className || ""}`
		: `${styles.crFeatureCard} ${className || ""}`

	return (
		<div className={wrapperClassName}>
			<ListTag className={listClassName}>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ListTag>
		</div>
	)
}

export default ListItems
