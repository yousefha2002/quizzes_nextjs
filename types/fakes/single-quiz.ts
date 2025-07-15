export type QuizStatus = "not-started" | "in-progress" | "passed" | "failed";

export type UserQuizData = {
    attempts: number;
    bestScore: number;
    status: QuizStatus;
    lastAttemptDate: string;
};

export type QuizInfo = {
    name: string;
    description: string;
    questionsCount: number;
    passPercentage: number;
};