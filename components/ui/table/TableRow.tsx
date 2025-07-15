import TableCell from './TableCell';

type TableRowProps = {
    cells: React.ReactNode[];
};

export default function TableRow({ cells }: TableRowProps) {
    return (
        <tr className="border-t border-white/10 hover:bg-white/5 transition">
        {cells.map((cell, index) => (
            <TableCell key={index}>{cell}</TableCell>
        ))}
        </tr>
    );
}
