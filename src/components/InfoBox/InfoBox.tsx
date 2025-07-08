import React from "react"
import styles from "./InfoBox.module.css"

interface InfoBoxProps {
	children: React.ReactNode
	className?: string
}

export const InfoBox: React.FC<InfoBoxProps> = ({ children, className }) => {
	return (
		<div className={`${styles.infoBox} ${className || ""}`}>{children}</div>
	)
}

export default InfoBox
