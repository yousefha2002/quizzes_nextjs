export type Level= {
    title: string;
    totalQuizzes: number;
    completedQuizzes?: number;
};

export type levelDash= {
    id: number;
    category: string;
    level: string;
    quizzesCount: number;
    completedQuizzes: number;
}