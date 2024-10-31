import React, { useState, useEffect } from "react"

import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/ext-language_tools"

import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/mode-yaml"

import jsYaml from "js-yaml"

import Ajv from "ajv"
const ajv = new Ajv({ allErrors: true })

import Schema from "../../../static/schema/schema.v2.json"

const validate = ajv.compile(Schema.definitions.schema)
const initialValue = `# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json
language: "en-US"
early_access: false
reviews:
  profile: "chill"
  request_changes_workflow: false
  high_level_summary: true
  poem: true
  review_status: true
  collapse_walkthrough: false
  auto_review:
    enabled: true
    drafts: false
chat:
  auto_reply: true
`
export default function YamlEditor() {
	const [value, setValue] = useState(initialValue)
	const [annotations, setAnnotations] = useState([])

	useEffect(() => {
		setValue(initialValue)
		validateAndSetAnnotations(initialValue)
	}, [])

	function validateAndSetAnnotations(yaml) {
		try {
			const doc = jsYaml.load(yaml, { strict: true })
			const isValid = validate(doc)

			if (!isValid && validate.errors) {
				setAnnotations(
					validate.errors.map(err => {
						const instancePathArr = err?.instancePath?.split("/")
						const key =
							instancePathArr && instancePathArr[instancePathArr.length - 1]
						return {
							row: err.instancePath ? getLineNumber(yaml, err.instancePath) : 0,
							column: 0,
							text: `${key}: ${err.message} ${
								err?.params?.allowedValues
									? `Allowed values: ${err.params.allowedValues.join(", ")}`
									: ""
							}`,
							type: "error",
						}
					}),
				)
			} else {
				setAnnotations([])
			}
		} catch (err) {
			const instancePathArr = err?.instancePath?.split("/")
			const key = instancePathArr && instancePathArr[instancePathArr.length - 1]

			setAnnotations([
				{
					row: err.instancePath ? getLineNumber(yaml, err.instancePath) : 0,
					column: 0,
					text:
						`${key}: ${err.message} ${
							err?.params?.allowedValues
								? `Allowed values: ${err.params.allowedValues.join(", ")}`
								: ""
						}` || "YAML parsing error",
					type: "error",
				},
			])
		}
	}

	function getLineNumber(yaml, instancePath) {
		const lines = yaml.split("\n")
		const pathParts = instancePath.split("/").filter(Boolean)
		let currentObj = jsYaml.load(yaml)
		let lineNumber = 0

		const lastPathPart = pathParts[pathParts.length - 1]
		const lastPathPartIndex = pathParts.length - 1

		for (let i = 0; i < lines.length; i++) {
			if (lines[i].trim().startsWith(pathParts[0] + ":")) {
				// Found the top-level field
				lineNumber = i
				currentObj = currentObj[pathParts[0]]

				for (let j = 1; j < lastPathPartIndex; j++) {
					// Go through the nested fields
					for (let k = lineNumber + 1; k < lines.length; k++) {
						if (lines[k].trim().startsWith(pathParts[j] + ":")) {
							lineNumber = k
							currentObj = currentObj[pathParts[j]]
							break
						}
					}
				}

				// look for the last path part with array syntax as well as object syntax
				for (let l = lineNumber + 1; l < lines.length; l++) {
					if (lines[l].trim().startsWith(`- ${lastPathPart}:`)) {
						lineNumber = l
						break
					} else if (lines[l].trim().startsWith(lastPathPart + ":")) {
						lineNumber = l
						break
					}
				}
				break
			}
		}

		return lineNumber
	}

	function onChange(newValue) {
		setValue(newValue)
		validateAndSetAnnotations(newValue)
	}

	return (
		<div className="m4">
			<AceEditor
				mode="yaml"
				theme="github"
				onChange={onChange}
				value={value}
				name="yaml-editor"
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
			<br />
		</div>
	)
}
