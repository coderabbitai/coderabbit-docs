import OriginalDocItem from "@theme-original/DocItem"
import type { Props } from "@theme/DocItem"
import { getLastUpdatedDate, getEditUrl } from "../../utils/docUtils"

export default function DocItem(props: Props): JSX.Element {

	return (
		<>
			<OriginalDocItem {...props} />

			<div className="mobile-toc-footer">
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
						<img
							src="/img/icons/cr_edit.svg"
							alt="Edit"
							width="16"
							height="16"
						/>
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
		</>
	)
}
