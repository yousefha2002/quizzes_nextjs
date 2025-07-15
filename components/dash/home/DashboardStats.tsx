import StatCard from "./StatCard";

export default function DashboardStats() {
const stats = [
    { label: "Passed Quizzes", value: 14 },
    { label: "Total Attempts", value: 27 },
    { label: "Certificates", value: 5 },
    { label: "Points", value: 720 },
];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
        ))}
        </div>
    );
}