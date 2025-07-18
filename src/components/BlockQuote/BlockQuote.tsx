import React from "react"
import styles from "./BlockQuote.module.css"

interface BlockQuoteProps {
	children: React.ReactNode
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ children }) => (
	<div className={styles.blockquote}>
		{children}
	</div>
)

export default BlockQuote