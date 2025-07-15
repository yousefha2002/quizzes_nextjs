export type AnswerDto = {
    id: number;
    title: string;
    isCorrect: boolean;
};

export type QuestionDto = {
    id: number;
    title: string;
    answers: AnswerDto[];
};

export type QuizQuestionsDto = {
    id: number;
    title: string;
    questions: QuestionDto[];
};