export const getLastUpdatedDate = (): string => {
	if (typeof window !== "undefined") {
		const lastUpdatedElement = document.querySelector(
			".theme-last-updated time",
		)
		if (lastUpdatedElement) {
			const dateTime = lastUpdatedElement.getAttribute("datetime")
			if (dateTime) {
				return new Date(dateTime).toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
					day: "numeric",
				})
			}
		}

		const timeElement = document.querySelector("time[datetime]")
		if (timeElement) {
			const dateTime = timeElement.getAttribute("datetime")
			if (dateTime) {
				return new Date(dateTime).toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
					day: "numeric",
				})
			}
		}
	}
	return new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	})
}

export const getEditUrl = (): string => {
	if (typeof window !== "undefined") {
		let path = window.location.pathname.replace(/\/$/, "")
		if (path === "" || path === "/") {
			return "https://github.com/coderabbitai/coderabbit-docs/edit/main/docs/overview/introduction.md"
		}
		path = path.replace(/^\//, "")
		return `https://github.com/coderabbitai/coderabbit-docs/edit/main/docs/${path}.md`
	}

	return "https://github.com/coderabbitai/coderabbit-docs/edit/main/docs/"
}