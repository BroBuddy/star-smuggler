import { parseLinks } from '@/lib/parseLinks'
import { SimpleListTableType } from '@/features/rule/types/RuleType'

function SimpleListTable({ table }: { table: SimpleListTableType }) {
    return (
        <table>
            {table.cols && (
                <thead>
                    <tr>
                        {table.cols.map((col, i) => (
                            <th key={i} className="p-2">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {table.rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td key={j} className="p-2">
                                {parseLinks(cell)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SimpleListTable
