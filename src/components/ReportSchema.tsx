import Schema from "@site/static/schema/reporting.json"
import JSONSchemaViewer from "@theme/JSONSchemaViewer"

export default function Viewer(): JSX.Element {
	return <JSONSchemaViewer schema={Schema} />
}
