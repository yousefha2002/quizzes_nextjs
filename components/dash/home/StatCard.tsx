interface StatCardProps {
    label: string;
    value: number;
}

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <div className="bg-card rounded p-6 text-center shadow border border-white/10">
        <p className="text-2xl font-bold text-primary">{value}</p>
        <p className="text-muted mt-1">{label}</p>
        </div>
    );
}