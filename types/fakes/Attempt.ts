export type AttemptRow = {
    quizId: string;
    quizName: string;
    attempts: number;
    bestScore: number;
    lastAttempt: string;
    status: 'passed' | 'failed';
}

export type AttemptDetail  = {
    id: string;
    date: string; // مثال: "2025-07-01 15:30"
    score: number; // 0 - 100
    status: 'passed' | 'failed';
}