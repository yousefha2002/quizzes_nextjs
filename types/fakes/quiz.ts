export type FeaturedQuizProps = {
    title: string;
    description: string;
    questionsCount: number;
    level: string;
    slug: string;
};

export type quizCard = {
    title: string;
    questionsCount: number;
    status?: QuizStatus;
}

export type InProgressQuiz = {
    id: string;
    name: string;
    category: string;
    level: string;
    lastAttempt: string;
    questionsCount: number;
    answeredCount: number;
}

export type QuizStatus = "not-started" | "passed" | "failed";