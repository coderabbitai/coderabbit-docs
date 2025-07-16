import React from "react"
import styles from "./Note.module.css"

interface NoteProps {
	children: React.ReactNode
}

const Note: React.FC<NoteProps> = ({ children }) => (
	<div className={styles.note}>
		<div className={styles.header}>
			<span className={styles.icon}>ℹ️</span>
			<span className={styles.title}>Note</span>
		</div>
		<div className={styles.text}>{children}</div>
	</div>
)

export default Note
