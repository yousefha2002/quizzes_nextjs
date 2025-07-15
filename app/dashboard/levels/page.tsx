import LevelProgressCard from '@/components/dash/levels/LevelProgressCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Pagination from '@/components/shared/Pagination';
import EmptyState from '@/components/shared/EmptyState';
import { getUserToken } from '@/lib/auth';
import { getStatrtedUserLevels } from '@/lib/levels';

type Props = {
    searchParams: Promise<{ page?: string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;

    const token = await getUserToken();
    const tokenValue = token?.value;

    const { progresses, totalPages } = await getStatrtedUserLevels(currentPage, 1,tokenValue);

    return (
        <>
            <SectionTitle>Your Progress</SectionTitle>
            {progresses.length === 0 ? (
                <EmptyState
                    title="No Started Levels"
                    message="You haven't started any levels yet."
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                    {progresses.map((level) => (
                        <LevelProgressCard key={level.id} level={level} />
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
        </>
    );
}
