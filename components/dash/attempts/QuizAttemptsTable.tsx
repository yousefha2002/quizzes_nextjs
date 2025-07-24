import Table from '@/components/ui/table/Table';
import TableHead from '@/components/ui/table/TableHead';
import TableRow from '@/components/ui/table/TableRow';
import { UserQuizAttempt } from '@/types/entities/Attempt';
import { formatDate } from '@/utils/heplers/formatDate';
import Link from 'next/link';

export default function QuizAttemptDetailsTable({ data, numberOfQuesions }: { data: UserQuizAttempt[], numberOfQuesions: number }) {
    const headers = ['StartedAt', 'Submitted At', 'Score', 'Questions', 'Status', 'View'];

    return (
        <div className="overflow-x-auto rounded-md border border-white/10">
            <Table>
                <TableHead columns={headers} />
                <tbody>
                    {data.map((attempt) => (
                        <TableRow
                            key={attempt.id}
                            cells={[
                                formatDate(attempt.createdAt),
                                attempt.submittedAt ? formatDate(attempt.submittedAt) : '—',
                                `${attempt.score}`,
                                `${numberOfQuesions}`,
                                <span
                                    className={`px-2 py-1 rounded text-xs font-semibold ${
                                        attempt.status === 'passed'
                                            ? 'bg-green-600 text-white'
                                            : attempt.status === 'failed'
                                            ? 'bg-red-600 text-white'
                                            : 'bg-yellow-500 text-black'
                                    }`}
                                >
                                    {attempt.status.replace('_', ' ')}
                                </span>,
                                <Link 
                                    key={`view-${attempt.id}`} 
                                    href={attempt.status==="in_progress"?`/quizzes/${attempt.quiz}`:`/attempt/${attempt.id}`} 
                                    className="text-secondary hover:underline"
                                >
                                    View
                                </Link>,
                            ]}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}