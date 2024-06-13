import JSONSchemaViewer from "@theme/JSONSchemaViewer";
import React from "react";

export default function Viewer(): JSX.Element {
  const [schema, setSchema] = React.useState(
    undefined as undefined | Error | unknown
  );

  React.useEffect(() => {
    fetch(
      "https://storage.googleapis.com/coderabbit_public_assets/schema.v2.json"
    )
      .then((response) => response.json())
      .then((data) => setSchema(data.definitions.schema))
      .catch((err) => setSchema(err));
  }, [schema]);

  return <JSONSchemaViewer schema={schema} />;
}
