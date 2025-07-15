type TableCellProps = {
    children: React.ReactNode;
    className?: string;
    colSpan?: number;
};

export default function TableCell({ children, className = '', colSpan }: TableCellProps) {
    return (
        <td className={`px-4 py-3 ${className}`} colSpan={colSpan}>
        {children}
        </td>
    );
}
