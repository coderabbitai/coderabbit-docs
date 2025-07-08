import React from "react"
import styles from "./PlatformGrid.module.css"

interface PlatformGridProps {
	children: React.ReactNode
	className?: string
}

export const PlatformGrid: React.FC<PlatformGridProps> = ({
	children,
	className,
}) => {
	return (
		<div className={`${styles.platformGrid} ${className || ""}`}>
			{children}
		</div>
	)
}

export default PlatformGrid
