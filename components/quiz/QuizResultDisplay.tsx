import React from "react";
import Container from "@/components/ui/Container";

type Props = {
    score: number;
    total: number;
    onRetry: () => void;
};

export default function QuizResultDisplay({ score, total, onRetry }: Props) {
    return (
        <Container className="py-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Your Score</h2>
        <p className="text-xl mb-6">
            You scored <span className="font-semibold">{score}</span> out of {total}
        </p>
        <button
            className="px-6 py-3 bg-primary rounded-md hover:bg-opacity-90 transition"
            onClick={onRetry}
        >
            Retry Quiz
        </button>
        </Container>
    );
}
