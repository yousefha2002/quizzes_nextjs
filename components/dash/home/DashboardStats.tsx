import { UserStatistic } from "@/types/entities/Satistic";
import StatCard from "./StatCard";

export default function DashboardStats({statistic}:{statistic:UserStatistic}) {
const stats = [
    { label: "Passed Quizzes", value: statistic.passedQuizzes | 0 },
    { label: "Total Attempts", value: statistic.totalAttempts | 0 },
    { label: "Certificates", value: statistic.certificateCount |0 },
    { label: "Points", value: statistic.totalPoints |0 },
];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
        {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
        ))}
        </div>
    );
}