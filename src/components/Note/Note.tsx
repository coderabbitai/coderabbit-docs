import React from "react"
import styles from "./Note.module.css"

interface NoteProps {
	children: React.ReactNode
}

const Note: React.FC<NoteProps> = ({ children }) => (
	<div className={styles.note}>
		<div className={styles.header}>
			<img src="/img/Icons/Icons.png" alt="Note" className={styles.icon} />
			<span className={styles.title}>Note</span>
		</div>
		<div className={styles.text}>{children}</div>
	</div>
)

export default Note
