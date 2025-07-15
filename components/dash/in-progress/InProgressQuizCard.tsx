import ButtonLink from '@/components/ui/PrimaryButton';
import ProgressBar from '@/components/ui/ProgressBar';
import { InProgressAttempt } from '@/types/entities/Attempt';
import { formatDate } from '@/utils/heplers/formatDate';

export default function InProgressQuizCard({ attempt }: { attempt: InProgressAttempt }) {
    const { createdAt, quiz, answeredCount } = attempt;
    const { title, numberOfQuestions, level, id } = quiz;
    const { title: levelTitle, category } = level;
    const { title: categoryTitle } = category;

  const progressPercent = Math.round((answeredCount / numberOfQuestions) * 100);

    return (
        <div className="bg-card border border-white/20 rounded-lg p-6 shadow-md text-white space-y-4 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold truncate capitalize">{title}</h2>
        <p className="text-muted text-sm">
            {categoryTitle} &mdash; {levelTitle}
        </p>

            <div className="flex justify-between items-center mb-4 text-sm space-x-6">
            <div>
                <p className="text-muted mb-1">Last Attempt</p>
                <p className="font-medium">{formatDate(new Date(createdAt).toISOString())}</p>
            </div>

            <div className="text-right min-w-[100px]">
                <p className="text-muted mb-1">Progress</p>
                <p className="font-semibold">
                {answeredCount} / {numberOfQuestions} ({progressPercent}%)
                </p>
            </div>
        </div>

        <ProgressBar value={progressPercent}/>

        <ButtonLink size="sm" href={`/quizzes/${id}`} className="w-full text-center">
            Continue Quiz
        </ButtonLink>
        </div>
    );
}
