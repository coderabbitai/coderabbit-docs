import { React, useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-yaml";

import jsYaml from "js-yaml";

import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true });

import Schema from "../../../static/schema/schema.v2.json";

export default function YamlEditor() {
  const [annotations, setAnnotations] = useState([]);
  const [value, setValue] = useState(
    "# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json\n"
  );
  const validate = ajv.compile(Schema.definitions.schema);
  function getRowFromPath(path) {
    // Convert path to row number (0-based)
    return path.split("/").length - 1;
  }
  function getLineNumber(yaml, path) {
    const lines = yaml.split("\n");
    const pathParts = path.split("/").filter(Boolean);
    let currentObj = jsYaml.load(yaml);
    let lineNumber = 0;

    for (const part of pathParts) {
      for (let i = lineNumber; i < lines.length; i++) {
        if (lines[i].trim().startsWith(part + ":")) {
          lineNumber = i;
          break;
        }
      }
      currentObj = currentObj[part];
    }

    return lineNumber;
  }
  function onChange(newValue) {
    setValue(newValue);
    try {
      const doc = jsYaml.load(newValue, { strict: true });
      const valid = validate(doc);
      console.log("Validation result:", valid);
      console.log("Validation errors:", validate.errors);

      if (!valid && validate.errors) {
        setAnnotations(
          validate.errors.map((err) => ({
            row: err.instancePath
              ? getLineNumber(newValue, err.instancePath)
              : 0,
            column: 0,
            text: `${err.keyword}: ${err.message} ${
              err?.params?.allowedValues
                ? `Allowed values: ${err.params.allowedValues.join(", ")}`
                : ""
            }`,
            type: "error",
          }))
        );
      } else {
        setAnnotations([]);
      }
    } catch (err) {
      console.error("Error:", err);
      console.log({
        errorMessage: err.reason,
        column: err.mark?.column,
        line: err.mark?.line,
      });
      setAnnotations([
        {
          row: err.instancePath ? getLineNumber(newValue, err.instancePath) : 0,
          column: 0,
          text:
            `${err.keyword}: ${err.message} ${
              err?.params?.allowedValues
                ? `Allowed values: ${err.params.allowedValues.join(", ")}`
                : ""
            }` || "YAML parsing error",
          type: "error",
        },
      ]);
    }
  }
  return (
    <AceEditor
      mode="yaml"
      theme="github"
      onChange={onChange}
      value={value}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        useWorker: false,
        showPrintMargin: false,
        showGutter: true,
      }}
      annotations={annotations}
      width="100%"
      height="400px"
    />
  );
}
