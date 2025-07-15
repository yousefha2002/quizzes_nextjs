import UserQuizCard from '@/components/dash/user_quizzes/UserQuizCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { getUserToken } from '@/lib/auth';
import { getUserQuizzes } from '@/lib/quizes';
import EmptyState from '@/components/shared/EmptyState';
import React from 'react';
import Pagination from '@/components/shared/Pagination';

type Props = {
    searchParams: Promise<{ page?: string; name?: string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;

    const token = await getUserToken();
    const tokenValue = token?.value;
    const {quizzes,totalPages} = await getUserQuizzes(currentPage,1,tokenValue);

    return (
        <>
            <SectionTitle>My Quizzes</SectionTitle>

            {quizzes.length === 0 ? (
                <EmptyState
                    title="No Quizzes Found"
                    message="You haven't completed any quizzes yet."
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {quizzes.map((quiz) => (
                        <UserQuizCard key={quiz.quiz.id} quizProps={quiz} />
                    ))}
                </div>
            )}
            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
        </>
    );
}
