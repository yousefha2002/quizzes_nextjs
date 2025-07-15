import { Level } from "./Level";

export type Certificate = {
    id: number;
    obtainedAt: string;
    user: {
        name: string;
        id:number
    };
    level:Level
}