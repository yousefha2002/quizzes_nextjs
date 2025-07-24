import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import QuizInfoCard from "@/components/quiz/QuizInfoCard";
import { getPublicQuizDetails } from "@/lib/quizes";
import { getUserToken } from "@/lib/auth";
import QuizWarning from "@/components/quiz/QuizWarning";

export default async function page({
    params,
    }: {
    params: Promise<{ categorySlug: string; levelSlug: string; quizSlug: string }>;
    }) {
    const { categorySlug, levelSlug, quizSlug } = await params;

    const quiz = await getPublicQuizDetails(categorySlug, levelSlug, quizSlug);
    const token = await getUserToken();
    const tokenValue = token?.value;

    return (
        <section className="py-16">
        <Container>
            <SectionTitle>{quiz.title}</SectionTitle>

            <p className="text-muted mb-6">
                Category:{" "}
                <span className="font-medium capitalize">
                    {quiz.level.category.title}
                </span>{" "}
                | Level:{" "}
                <span className="capitalize">
                    {quiz.level.title}
                </span>
            </p>

            {!tokenValue && <QuizWarning />}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
                <QuizInfoCard quizInfo={quiz} />
            </div>
            </div>
        </Container>
        </section>
    );
}