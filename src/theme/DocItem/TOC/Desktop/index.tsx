import { useColorMode } from "@docusaurus/theme-common"
import OriginalDesktopTOC from "@theme-original/DocItem/TOC/Desktop"
import React from "react"
import { getEditUrl, getLastUpdatedDate } from "../../../../utils/docUtils"

export default function DesktopTOC(
	props: React.ComponentProps<typeof OriginalDesktopTOC>,
): JSX.Element {
	const { colorMode, setColorMode } = useColorMode()

	return (
		<div className="custom-desktop-toc-wrapper">
			<div className="toc-nav-items">
				<a
					href="https://discord.gg/coderabbit"
					className="toc-nav-link discord-link"
					aria-label="Discord"
					target="_blank"
					rel="noopener noreferrer"
				/>

				<a
					href="https://github.com/coderabbitai/coderabbit-docs"
					className="toc-nav-link github-link"
					aria-label="GitHub"
					target="_blank"
					rel="noopener noreferrer"
				/>

				<button
					className="toc-nav-link theme-toggle"
					onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
					aria-label={`Switch to ${colorMode === "dark" ? "light" : "dark"} mode`}
				/>

				<a
					href="https://coderabbit.ai/blog"
					className="toc-nav-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					Blog
				</a>
			</div>

			<OriginalDesktopTOC {...props} />

			<div className="toc-footer-section">
				<div className="toc-last-updated">
					<span>Last updated on</span>
					<br />
					<strong>{getLastUpdatedDate()}</strong>
				</div>

				<a
					href={getEditUrl()}
					className="toc-edit-page"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/img/icons/cr_edit.svg" alt="Edit" width="16" height="16" />
					Edit this page
				</a>
			</div>

			<div className="toc-pagination">
				<a
					href="#"
					className="toc-prev-link"
					onClick={e => {
						e.preventDefault()
						if (typeof window !== "undefined" && window.history.length > 1) {
							window.history.back()
						}
					}}
				>
					<span></span>
					Previous
				</a>
				<a
					href="#"
					className="toc-next-link"
					onClick={e => {
						e.preventDefault()
						if (typeof window !== "undefined" && window.history.length > 1) {
							window.history.forward()
						}
					}}
				>
					Next
					<span></span>
				</a>
			</div>
		</div>
	)
}
