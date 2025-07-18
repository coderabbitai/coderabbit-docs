import React, { useState } from "react"
import styles from "./ChatBubble.module.css"

export default function ChatBubble({
	children,
}: {
	children: React.ReactNode
}) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			const textContent = typeof children === 'string' 
				? children 
				: (children as any)?.props?.children || children?.toString() || '';
			await navigator.clipboard.writeText(textContent);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<div className={styles.chatBubble}>
			<div className={styles.content}>{children}</div>
			<button
				className={styles.copyButton}
				onClick={handleCopy}
				title={copied ? "Copied!" : "Copy text"}
			>
				{copied ? (
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<polyline points="20,6 9,17 4,12"></polyline>
					</svg>
				) : (
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
					</svg>
				)}
			</button>
		</div>
	)
}
