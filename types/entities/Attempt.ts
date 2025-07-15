import { QuizInfo } from './Quiz';

export type AttemptStatus = 'in_progress' | 'failed' |'passed';

export type InProgressAttempt = {
    id: number;
    createdAt: string; 
    quiz: QuizInfo;
    answeredCount: number;
    };

export type SubmittedAttempt = {
    id: number;
    score: number;
    createdAt: string;
    submittedAt: string;
    quiz: Pick<QuizInfo, 'title' | 'numberOfQuestions'> & { passScore: number };
};

export type AttemptAnswerResponse = {
    id: number;
    status: AttemptStatus;
    attemptAnswers: {
        question: {
        id: number;
        title: string;
        answers: { id: number; title: string }[];
        };
        answer: { id: number; title: string } | null;
    }[];
};

export type UserQuizAttempt = {
    id: number;
    status: AttemptStatus;
    score: number;
    createdAt: string;
    submittedAt: string | null;
    quiz: Pick<QuizInfo, 'id' | 'title'>;
};