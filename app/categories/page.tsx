import CardGrid from "@/components/cards/CardGrid";
import Container from "@/components/ui/Container";
import QuizCategoryCard from "@/components/cards/QuizCategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Pagination from "@/components/shared/Pagination";
import SearchByName from "@/components/ui/forms/SearchByName";
import { getCategories } from "@/lib/categories";
import EmptyState from "@/components/shared/EmptyState";

type Props = {
    searchParams: Promise<{ page?: string,name?:string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;
    const name = search.name ? search.name : undefined;
    const {categories,totalPages} = await getCategories(currentPage,12,name);

    return (
        <section className="py-16">
            <Container>
                <SectionTitle>All Quiz Categories</SectionTitle>
                <SearchByName />
                {
                    categories.length===0
                    ?
                    <EmptyState/>
                    :
                    <CardGrid
                    items={categories}
                    className="mt-8"
                    renderItem={(category) => (
                        <QuizCategoryCard key={category.id} title={category.title} />
                    )}
                />
                }
                {totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} />
                )}
            </Container>
        </section>
    );
}