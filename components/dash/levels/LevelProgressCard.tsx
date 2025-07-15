import ProgressBar from "@/components/ui/ProgressBar";
import ButtonLink from "@/components/ui/PrimaryButton";
import { LevelProgressData } from "@/types/entities/Level";
import SubmitPorgressButton from "./SubmitPorgressButton";

export default function LevelProgressCard({ level }: { level: LevelProgressData }) {
    const percentage = Math.round((level.completedQuizzes / level.quizCount) * 100);
    const isCompleted = percentage === 100;

    return (
        <div className="bg-card rounded-xl shadow-sm border border-white/10 p-4 flex flex-col gap-4">
            {/* Header */}
            <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                    <h3 className="text-base font-semibold capitalize leading-tight">
                        {level.title} - {level.category.title}
                    </h3>
                    <p className="text-xs text-muted">{level.quizCount} Quizzes</p>
                </div>
                {isCompleted && (
                    <SubmitPorgressButton levelId={level.id} />
                )}
            </div>

            {/* Progress */}
            <div>
                <ProgressBar value={percentage} />
                <p className="text-xs mt-1">
                    Progress: <span className="font-medium">{percentage}%</span> —{" "}
                    {isCompleted ? (
                        <span className="text-green-500 font-semibold">Completed ✅</span>
                    ) : (
                        <span className="text-yellow-400 font-semibold">In Progress</span>
                    )}
                </p>
            </div>

            {/* Bottom Action */}
            <div className="flex justify-end mt-2">
                <ButtonLink
                    href={`/categories/${level.category.title}/${level.title}`}
                    size="sm"
                >
                    {isCompleted ? "Retake" : "Continue"}
                </ButtonLink>
            </div>
        </div>
    );
}