export type AttemptStatus = 'in_progress' | 'submitted' 

export type AttemptAnswerResponse = {
    id: number;
    status: AttemptStatus;
    attemptAnswers: {
        question: {
        id: number;
        title: string;
        answers: { id: number; title: string }[];
        };
        answer: {
        id: number;
        title: string;
        } | null;
    }[];
};