/*
 * Copyright 2024 CodeRabbit AI Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
