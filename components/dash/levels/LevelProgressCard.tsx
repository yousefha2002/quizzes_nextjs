import ProgressBar from "@/components/ui/ProgressBar";
import { LevelProgressData } from "@/types/entities/Level";
import SubmitProgressButton from "./SubmitPorgressButton";
import ButtonLink from "@/components/ui/PrimaryButton";

export default function LevelProgressCard({ level }: { level: LevelProgressData }) {
    const percentage = Math.round((level.completedQuizzes / level.quizCount) * 100);
    const isCompleted = percentage === 100;

    return (
        <div className="bg-card rounded-2xl border border-white/10 p-5 shadow-md flex flex-col gap-4">
            {/* Header */}
            <div className="flex justify-between items-center flex-wrap gap-3">
                <div>
                    <h3 className="text-lg font-semibold capitalize text-white">
                        {level.title} - {level.category.title}
                    </h3>
                    <p className="text-sm text-muted">{level.quizCount} Quizzes</p>
                </div>
                {isCompleted&&<SubmitProgressButton levelId={level.id} />}
            </div>

            {/* Progress */}
            <div>
                <ProgressBar value={percentage} />
                <p className="text-sm mt-2 text-muted-foreground">
                    Progress: <span className="font-semibold text-white">{percentage}%</span> —{" "}
                    {isCompleted ? (
                        <span className="text-green-500 font-semibold">Completed ✅</span>
                    ) : (
                        <span className="text-yellow-400 font-semibold">In Progress</span>
                    )}
                </p>
            </div>

            {/* Bottom Action */}
            <div className="flex justify-end">
                <ButtonLink
                    href={`/categories/${level.category.title}/${level.title}`}
                    size="sm"
                    className="mt-2"
                >
                    {isCompleted ? "Retake" : "Continue"}
                </ButtonLink>
            </div>
        </div>
    );
}