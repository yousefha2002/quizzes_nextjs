import ButtonLink from "../ui/PrimaryButton";
import { QuizCardProps,QuizStatus } from "@/types/entities/Quiz";

export default function QuizCard({quiz,categorySlug,levelSlug,isLoggedIn,}: {quiz: QuizCardProps;levelSlug: string;categorySlug: string;isLoggedIn: boolean;}) 
{
    const { title, numberOfQuestions, userStatus } = quiz;

    const statusLabelMap: Record<QuizStatus, string> = {
        "passed": "Passed ✅",
        "failed": "Failed ❌",
    };

    const actionLabelMap: Record<QuizStatus, string> = {
        "passed": "Retake",
        "failed": "Retry",
    };

    const statusColorMap: Record<QuizStatus, string> = {
        "passed": "text-green-400",
        "failed": "text-red-400",
    };

    const statusLabel = isLoggedIn && userStatus ? statusLabelMap[userStatus] : null;
    const actionLabel = isLoggedIn && userStatus ? actionLabelMap[userStatus] : "Start";
    const statusColor = isLoggedIn && userStatus ? statusColorMap[userStatus] : "";

    return (
        <div className="p-4 rounded bg-card text-white border border-white/10 shadow flex flex-col gap-3 relative">
            <h3 className="text-lg font-bold capitalize">{title}</h3>
            <p className="text-sm text-gray-300">{numberOfQuestions} Questions</p>
            
            <div className="flex justify-between items-center mt-auto">
                {isLoggedIn && userStatus ? (
                <>
                    <span className={`text-sm font-semibold ${statusColor}`}>
                    {statusLabel}
                    </span>
                    <ButtonLink
                    href={`/categories/${categorySlug}/${levelSlug}/${title}`}
                    size="sm"
                    >
                    {actionLabel}
                    </ButtonLink>
                </>
                ) : (
                <ButtonLink
                    href={`/categories/${categorySlug}/${levelSlug}/${title}`}
                    size="sm"
                >
                    Start
                </ButtonLink>
                )}
            </div>
        </div>
    );
}