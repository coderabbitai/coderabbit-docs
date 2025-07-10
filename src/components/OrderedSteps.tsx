import React from "react"

export default function OrderedSteps({ children }) {
	return (
		<ol style={{ paddingLeft: 24 }}>
			{React.Children.map(children, (child, idx) => (
				<li style={{ marginBottom: 16 }}>{child}</li>
			))}
		</ol>
	)
}
