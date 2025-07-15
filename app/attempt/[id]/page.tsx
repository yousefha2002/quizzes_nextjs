import Container from "@/components/ui/Container";
import { getSubmittedAttempt } from "@/lib/attempts";
import { getUserToken } from "@/lib/auth";
import { formatDate } from "@/utils/heplers/formatDate";
import { isPassed } from "@/utils/heplers/isPassed";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const token = await getUserToken();
    const tokenValue = token?.value;

    const attempt = await getSubmittedAttempt(+id, tokenValue);
    const { quiz, score, createdAt, submittedAt } = attempt;

    const passed = isPassed(score, quiz.passScore, quiz.numberOfQuestions);

    return (
        <Container className="py-16">
        <div className="bg-card text-textBase p-8 rounded-lg shadow-md text-center max-w-xl mx-auto border border-white/10">
            <h1 className="text-2xl font-bold mb-4 text-primary">Quiz Result</h1>

            <p className="text-lg text-muted mb-2">
            Quiz: <span className="font-semibold text-textBase">{quiz.title}</span>
            </p>

            <p className="text-lg text-muted mb-2">
            Score: <span className="font-semibold text-textBase">{score} / {quiz.numberOfQuestions}</span>
            </p>

            <p className="text-sm text-muted mb-2">
            Required to pass: <span className="font-semibold text-textBase">{quiz.passScore}%</span>
            </p>

            <p className={`text-lg font-bold mb-4 ${passed ? 'text-success' : 'text-error'}`}>
            {passed ? '✅ You Passed!' : '❌ You Failed'}
            </p>

            <p className="text-sm text-muted">
            Started on: <span className="font-semibold text-textBase">{formatDate(createdAt)}</span>
            </p>

            <p className="text-sm text-muted mb-2">
            Submitted on: <span className="font-semibold text-textBase">{formatDate(submittedAt)}</span>
            </p>
        </div>
        </Container>
    );
}
