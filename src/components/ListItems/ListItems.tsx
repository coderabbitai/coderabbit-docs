import React from "react"
import styles from "./ListItems.module.css"

interface ListItemsProps {
	items: React.ReactNode[]
	className?: string
	orderedList?: boolean
}

export const ListItems: React.FC<ListItemsProps> = ({
	items,
	className,
	orderedList = false,
}) => {
	const ListTag = orderedList ? "ol" : "ul"
	const listClassName = orderedList
		? styles.crOrderedList
		: styles.crFeatureList

	return (
		<div className={`${styles.crFeatureCard} ${className || ""}`}>
			<ListTag className={listClassName}>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ListTag>
		</div>
	)
}

export default ListItems
