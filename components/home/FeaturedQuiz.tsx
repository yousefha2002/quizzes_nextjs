import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ButtonLink from "../ui/PrimaryButton";
import { FeaturedQuizProps } from "@/types/fakes/quiz";

export default function FeaturedQuiz({title,description,questionsCount,level,slug,}: FeaturedQuizProps) {
    return (
        <section className="bg-background py-16">
            <Container>
                <SectionTitle>Quiz of the Day</SectionTitle>
                <div className="max-w-xl mx-auto bg-card rounded-xl p-8 shadow-md">
                    <h3 className="text-2xl font-semibold text-textBase mb-4">{title}</h3>
                    <p className="text-muted mb-4">{description}</p>
                    <div className="flex justify-between text-sm text-muted mb-6">
                        <span>{questionsCount} Questions</span>
                        <span>Level: {level}</span>
                    </div>
                    <ButtonLink href={`/quizzes/${slug}`} block>Start Quiz</ButtonLink>        
                </div>
            </Container>
        </section>
    );
}