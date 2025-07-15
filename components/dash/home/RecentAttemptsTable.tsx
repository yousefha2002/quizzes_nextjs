import Table from '@/components/ui/table/Table';
import TableHead from '@/components/ui/table/TableHead';
import TableRow from '@/components/ui/table/TableRow';
import attempts from '@/data/fakes/attempts';
import Link from 'next/link';

export default function RecentAttemptsTable() {
    const headers = ['Quiz', 'Attempts', 'Best Score', 'Last Attempt', 'Status', 'Actions'];
    const recentData = attempts.slice(0, 5);

    return (
        <Table>
        <TableHead columns={headers} />
        <tbody>
            {recentData.map((quiz) => (
            <TableRow
                key={quiz.quizId}
                cells={[
                quiz.quizName,
                quiz.attempts,
                `${quiz.bestScore}%`,
                quiz.lastAttempt,
                <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                    quiz.status === 'passed' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}
                >
                    {quiz.status === 'passed' ? 'Passed' : 'Failed'}
                </span>,
                <Link
                    href={`/dashboard/attempts/${quiz.quizId}`}
                    className="text-primary hover:underline text-sm font-medium"
                >
                    View Attempts
                </Link>,
                ]}
            />
            ))}
        </tbody>
        </Table>
    );
}