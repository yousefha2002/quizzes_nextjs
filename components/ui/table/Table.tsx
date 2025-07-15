type TableProps = {
    children: React.ReactNode;
};

export default function Table({ children }: TableProps) {
    return (
        <div className="overflow-x-auto rounded-md border border-white/10">
        <table className="min-w-full text-sm text-left bg-card text-white">
            {children}
        </table>
        </div>
    );
}
