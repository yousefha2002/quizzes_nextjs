import LevelCard from "@/components/cards/LevelCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CardGrid from "@/components/cards/CardGrid";
import { getLevelsForUser, getLevelsForVisitor } from "@/lib/levels";
import EmptyState from "@/components/shared/EmptyState";
import { getUserToken } from "@/lib/auth";

export default async function page({params}: {params: Promise<{ categorySlug: string }>}) {
    const { categorySlug } = await params;
    const token = await getUserToken();
    const tokenValue = token?.value;
    const levels = token?await getLevelsForUser(categorySlug,tokenValue):await getLevelsForVisitor(categorySlug)

    return (
        <section className="py-16">
            <Container>
                <SectionTitle>{`${categorySlug.toUpperCase()} QUIZZES`}</SectionTitle>
                {levels.length === 0 ? (
                <EmptyState
                    title="No Levels Found"
                    message="There are no levels available in this category yet."
                />
                ) : (
                <CardGrid
                    items={levels}
                    className="mt-8"
                    renderItem={(level) => (
                    <LevelCard
                        key={level.id}
                        level={level}
                        categorySlug={categorySlug}
                        isLoggedIn={token?true:false}
                    />
                    )}
                />
                )}
            </Container>
        </section>
    );
}