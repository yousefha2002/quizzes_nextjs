import QuizAttemptDetailsTable from '@/components/dash/attempts/QuizAttemptsTable';
import SectionTitle from '@/components/ui/SectionTitle';
import { getUserQuizAttempt } from '@/lib/attempts';
import { getUserToken } from '@/lib/auth';
import Pagination from '@/components/shared/Pagination';
import EmptyState from '@/components/shared/EmptyState';

type Props = {
    searchParams: Promise<{ page?: string }>;
    params: Promise<{ quizSlug: string }>; 
};

export default async function page({ params, searchParams }: Props) {
    const { quizSlug } = await params;
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;

    const token = await getUserToken();
    const tokenValue = token?.value;

    const { attempts, totalPages ,quiz} = await getUserQuizAttempt(+quizSlug, currentPage, 10, tokenValue);

    return (
        <>
            <SectionTitle>{quiz.title + ' attempts details'}</SectionTitle>

            {attempts.length === 0 ? (
                <EmptyState
                    title="No Attempts Found"
                    message="You haven't attempted this quiz yet."
                />
            ) : (
                <>
                    <QuizAttemptDetailsTable data={attempts} numberOfQuesions={quiz.numberOfQuestions} />
                    {totalPages > 1 && (
                        <div className="mt-6">
                            <Pagination currentPage={currentPage} totalPages={totalPages} />
                        </div>
                    )}
                </>
            )}
        </>
    );
}