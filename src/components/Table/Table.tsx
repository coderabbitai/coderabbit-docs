import React from "react"
import styles from "./Table.module.css"

interface SupportedStatusProps {
	text: string
	icon?: string
}

const SupportedStatus: React.FC<SupportedStatusProps> = ({ text, icon }) => {
	return (
		<div className={styles.supportedStatus}>
			{icon && <img src={icon} alt="" className={styles.supportIcon} />}
			<span className={styles.supportText}>{text}</span>
		</div>
	)
}

interface TableColumn {
	key: string
	label: string
}

interface TableRow {
	[key: string]: React.ReactNode
}

interface PlatformSection {
	title: string
	rows: TableRow[]
}

interface TableProps {
	columns: TableColumn[]
	sections: PlatformSection[]
	className?: string
}

export const Table: React.FC<TableProps> = ({
	columns,
	sections,
	className,
}) => {
	const columnWidth = `${100 / columns.length}%`
	
	return (
		<div className={`${styles.tableContainer} ${className || ""}`}>
			{sections.map((section, sectionIndex) => (
				<div key={sectionIndex} className={styles.platformSection}>
					<table className={styles.table}>
						<thead>
							<tr className={styles.titleRow}>
								<td colSpan={columns.length} className={`${styles.titleSection} ${section.title ? styles.titleWithText : styles.titleEmpty}`}>
									{section.title && <span className={styles.titleText}>{section.title}</span>}
								</td>
							</tr>
							<tr>
								{columns.map((column) => (
									<th key={column.key} style={{ width: columnWidth }}>
										{column.label}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{section.rows.map((row, rowIndex) => (
								<tr key={rowIndex}>
									{columns.map((column) => (
										<td key={column.key} style={{ width: columnWidth }}>
											{column.key === 'support' && typeof row[column.key] === 'string' && row[column.key] === 'Supported' ? (
												<SupportedStatus 
													text={row[column.key] as string} 
													icon="/img/Icons/Vector.png"
												/>
											) : (
												row[column.key]
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	)
}

export default Table