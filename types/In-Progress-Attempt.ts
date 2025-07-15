type CategoryInfo = {
    title: string;
};

type LevelInfo = {
    title: string;
    category: CategoryInfo;
};

type QuizInfo = {
    id: number;
    title: string;
    numberOfQuestions: number;
    level: LevelInfo;
};

export type InProgressAttempt = {
    id: number;
    createdAt: Date;
    quiz: QuizInfo;
    answeredCount:number
};