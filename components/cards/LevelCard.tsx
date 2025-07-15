import { Level } from "@/types/entities/Level";
import ButtonLink from "../ui/PrimaryButton";
import ProgressBar from "../ui/ProgressBar";

export default function LevelCard({ level, categorySlug, isLoggedIn }: { level: Level; categorySlug: string; isLoggedIn: boolean }) {
    const { completedQuizzes = 0, quizCount, title } = level;
    const progress = isLoggedIn ? Math.round((completedQuizzes / quizCount) * 100) : 0;
    const isCompleted = isLoggedIn && completedQuizzes === quizCount;

    return (
        <div className="p-5 rounded bg-card shadow border border-white/10 text-white flex flex-col gap-3">
            <h3 className="text-lg font-bold capitalize">{title}</h3>
            <p className="text-sm text-gray-300">{quizCount} Quizzes</p>

            {isLoggedIn && (
                <>
                <ProgressBar value={progress} />
                <div className="flex justify-between items-center mt-2">
                    <ButtonLink href={`/categories/${categorySlug}/${title}`} size="sm">
                    {isCompleted ? "Review" : completedQuizzes > 0 ? "Continue" : "Start"}
                    </ButtonLink>
                    {isCompleted && (
                    <span className="text-green-400 font-bold text-sm">✅ Completed</span>
                    )}
                </div>
            </>
        )}

        {!isLoggedIn && (
            <div className="mt-2">
            <ButtonLink href={`/categories/${categorySlug}/${title}`} size="sm">
                Start
            </ButtonLink>
            </div>
        )}
        </div>
    );
}