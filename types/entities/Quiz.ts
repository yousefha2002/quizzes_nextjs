import { Level } from './Level';
export type QuizStatus = "passed" | "failed";

export type QuizInfo = {
    id: number;
    title: string;
    numberOfQuestions: number;
    level: Level;
};

export type PublicQuizDetails = {
    id: number;
    title: string;
    headline: string;
    numberOfQuestions: number;
    passScore: number;
    level: Level;
};

export type QuizCardProps = {
    id: number;
    title: string;
    numberOfQuestions: number;
    userStatus?: QuizStatus;
};

export type UserQuiz = {
    quiz: QuizInfo;
};
