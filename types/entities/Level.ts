import { Category } from "../Category";

export type Level = {
    id: number;
    title: string;
    quizCount: number;
    completedQuizzes?: number;
    category: Category;
};

export type LevelProgressData = {
    id: number;
    title: string; 
    quizCount: number;
    completedQuizzes: number;
    category: Category
};