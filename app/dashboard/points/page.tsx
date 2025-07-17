import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PointsTable from "@/components/dash/points/PointsTable";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";
import { getUserPoints } from "@/lib/points";
import { getUserToken } from "@/lib/auth";

type Props = {
    searchParams: Promise<{ page?: string }>;
};

export default async function Points({ searchParams }: Props) {
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;
    
    const token = await getUserToken();
    const tokenValue = token?.value;

    const { totalPages, points } = await getUserPoints(currentPage, 10,tokenValue);

    return (
        <Container>
            <SectionTitle>Points Details</SectionTitle>

            {points.length === 0 ? (
                <EmptyState
                    title="No Points Yet"
                    message="You haven't earned any points yet."
                />
            ) : (
                <PointsTable points={points} />
            )}

            {totalPages > 1 && (
                <div className="mt-6">
                    <Pagination currentPage={currentPage} totalPages={totalPages} />
                </div>
            )}
        </Container>
    );
}