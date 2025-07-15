type TableHeadProps = {
    columns: string[];
};

export default function TableHead({ columns }: TableHeadProps) {
    return (
        <thead className="bg-muted text-muted-foreground">
        <tr>
            {columns.map((col) => (
            <th key={col} className="px-4 py-3">
                {col}
            </th>
            ))}
        </tr>
        </thead>
    );
}
