import React from "react"
import styles from "./FeatureList.module.css"

interface FeatureListProps {
	items: React.ReactNode[]
	className?: string
}

export const FeatureList: React.FC<FeatureListProps> = ({
	items,
	className,
}) => {
	return (
		<div className={`${styles.crFeatureCard} ${className || ""}`}>
			<ul className={styles.crFeatureList}>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default FeatureList
