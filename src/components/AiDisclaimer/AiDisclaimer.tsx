import React from "react"
import "./style.css"
import WriteIcon from "@site/static/img/write-icon.svg"

type AiDisclaimerProps = {}

export const AiDisclaimer: React.FC<AiDisclaimerProps> = props => {
	return (
		<div className="ai-disclaimer-wrapper">
			<div className="ai-disclaimer-container">
				<WriteIcon className="ai-disclaimer-icon" />
				<div className="ai-disclaimer-content">
					<div className="ai-disclaimer-title">Disclaimer</div>
					<div className="ai-disclaimer-description">
						This piece has been written by humans; it has also been reviewed and
						approved by humans. However, there was a touch of AI: it assisted us
						in correcting grammar, enhancing syntax, and improving sentence
						clarity. Thanks for reading!
					</div>
				</div>
			</div>
		</div>
	)
}
