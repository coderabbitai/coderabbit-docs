import React from "react"
import styles from "./PlatformCard.module.css"

interface PlatformCardProps {
	imageSrc: string
	name: string
	className?: string
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
	imageSrc,
	name,
	className,
}) => {
	return (
		<div className={`${styles.platformCard} ${className || ""}`}>
			<img className={styles.platformIcon} src={imageSrc} alt={name} />
			<span>{name}</span>
		</div>
	)
}

export default PlatformCard
