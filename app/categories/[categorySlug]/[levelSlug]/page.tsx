import CardGrid from "@/components/cards/CardGrid";
import QuizCard from "@/components/cards/QuizCard";
import EmptyState from "@/components/shared/EmptyState";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getUserToken } from "@/lib/auth";
import { getQuizzesForVisitor, getQuizzesLoggedIn } from "@/lib/quizes";

export default async function QuizzesInLevelPage({ params }: { params:Promise<{categorySlug: string; levelSlug: string }> }) {
    const { categorySlug, levelSlug } = await params;
    const token = await getUserToken();
    const tokenValue = token?.value;
    const quizzes = token?await getQuizzesLoggedIn(categorySlug,levelSlug,tokenValue):await getQuizzesForVisitor(categorySlug,levelSlug)
    return (
        <section className="py-16">
            <Container>
                <SectionTitle>
                {` ${categorySlug.toUpperCase()} - ${levelSlug.charAt(0).toUpperCase() + levelSlug.slice(1)} Quizzes`}
                </SectionTitle>

                {quizzes.length === 0 ? (
                    <EmptyState
                        title="No Quizzes Found"
                        message="There are no quizzes available in this level yet."
                    />
                    ) : (
                    <CardGrid
                        items={quizzes}
                        className="mt-8"
                        renderItem={(quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            categorySlug={categorySlug}
                            levelSlug={levelSlug}
                            isLoggedIn={token?true:false}
                        />
                        )}
                    />
                )}
            </Container>
        </section>
    );
}