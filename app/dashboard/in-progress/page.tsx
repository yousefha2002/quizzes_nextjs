import InProgressQuizCard from "@/components/dash/in-progress/InProgressQuizCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getInProressAttemptsForUser } from "@/lib/attempts";
import { getUserToken } from "@/lib/auth";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";

type Props = {
    searchParams: Promise<{ page?: string; name?: string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;

    const token = await getUserToken();
    const tokenValue = token?.value;

    const { attempts, totalPages } = await getInProressAttemptsForUser(currentPage, 10, tokenValue);

    return (
        <>
            <SectionTitle>In-Progress Quizzes</SectionTitle>

            {attempts.length === 0 ? (
                <EmptyState
                    title="No In-Progress Quizzes"
                    message="You haven't started any quizzes yet."
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                    {attempts.map((quiz) => (
                        <InProgressQuizCard key={quiz.id} attempt={quiz} />
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
        </>
    );
}