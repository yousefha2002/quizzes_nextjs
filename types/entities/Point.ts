import { Level } from "./Level";

export type Quiz = {
    id: number;
    title: string;
};

export type LevelInfo = Level; 

export type Certificate = {
    id: number;
    level: LevelInfo;
};

export type Attempt = {
    id: number;
};

export type PointsType = 'attempt' | 'pass quiz' | 'certificate';

export type Point = {
    id:number,
    points: number;
    type: PointsType;
    createdAt: string | Date;
    quiz?: Quiz;
    certificate?: Certificate;
    attempt?: Attempt;
};
