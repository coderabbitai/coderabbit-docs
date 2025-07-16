import React from "react"
import styles from "./ChatBubble.module.css"

export default function ChatBubble({
	children,
}: {
	children: React.ReactNode
}) {
	return <div className={styles.chatBubble}>{children}</div>
}
