import React from "react";
import ButtonLink from "@/components/ui/PrimaryButton";
import Link from "next/link";
import { UserQuiz } from "@/types/entities/Quiz";

export default function UserQuizCard({ quizProps }: { quizProps: UserQuiz }) {
    const { quiz, quiz: { level, level: { category } } } = quizProps;

    return (
        <div className="bg-card p-6 rounded-lg border border-white/10 shadow-md flex flex-col justify-between h-full">
        <div>
            <h3 className="text-xl font-semibold text-textBase mb-2 truncate capitalize">{quiz.title}</h3>

            <p className="text-sm text-muted mb-1">
            Level:{" "}
            <Link
                href={`/categories/${level.title}/${category.title}`}
                className="capitalize text-primary hover:underline"
            >
                {level.title}
            </Link>
            </p>

            <p className="text-sm text-muted mb-4">
            Category:{" "}
            <Link
                href={`/categories/${category.title}`}
                className="capitalize text-primary hover:underline"
            >
                {category.title}
            </Link>
            </p>
        </div>

        <div className="mt-auto flex gap-3">
            <ButtonLink href={`/dashboard/attempts/${quiz.id}`} size="sm" className="flex-1 text-center">
            View Attempts
            </ButtonLink>
            <ButtonLink
            href={`/categories/${category.title}/${level.title}/${quiz.title}`}
            size="sm"
            className="flex-1 text-center"
            >
            Retry Quiz
            </ButtonLink>
        </div>
        </div>
    );
}
