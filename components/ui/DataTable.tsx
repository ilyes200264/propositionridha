interface DataTableProps {
    headers: string[];
    rows: (string | number)[][];
    className?: string;
}

export function DataTable({ headers, rows, className = "" }: DataTableProps) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <thead>
                    <tr className="bg-primary text-white">
                        {headers.map((header, i) => (
                            <th
                                key={i}
                                className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            className="border-b border-border hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className={`px-6 py-4 ${typeof cell === "number" ? "font-mono font-semibold" : ""
                                        }`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
