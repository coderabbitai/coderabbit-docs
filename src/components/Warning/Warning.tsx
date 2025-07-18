import React from "react"
import styles from "./Warning.module.css"

interface WarningProps {
	children: React.ReactNode
}

const Warning: React.FC<WarningProps> = ({ children }) => (
	<div className={styles.warning}>
		<div className={styles.header}>
			<img src="/img/Icons/Warning.png" alt="Warning" className={styles.icon} />
			<span className={styles.title}>Warning</span>
		</div>
		<div className={styles.text}>{children}</div>
	</div>
)

export default Warning