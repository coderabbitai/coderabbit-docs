import Schema from "@site/static/schema/schema.v2.json"
import JSONSchemaViewer from "@theme/JSONSchemaViewer"

export default function Viewer(): JSX.Element {
	return <JSONSchemaViewer schema={Schema.definitions.schema} />
}
