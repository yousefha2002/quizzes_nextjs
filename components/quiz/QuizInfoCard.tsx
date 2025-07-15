import { PublicQuizDetails } from "@/types/entities/Quiz";
import ButtonLink from "../ui/PrimaryButton";

export default function QuizInfoCard({quizInfo}: {quizInfo: PublicQuizDetails;}) {
    return (
        <div className="bg-card text-white rounded p-6 shadow-md border border-white/10">
        <p className="mb-4 text-gray-300">{quizInfo.headline}</p>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-200">
            <div>📝 Questions: {quizInfo.numberOfQuestions}</div>
            <div>🎯 Pass Score: {quizInfo.passScore}%</div>
        </div>

        <ButtonLink href={`/quizzes/${quizInfo.id}`} size="sm">
            Start Quiz
        </ButtonLink>
        </div>
    );
}