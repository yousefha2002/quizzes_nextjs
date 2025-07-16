import { Level } from "./Level";

export type BaseCertificate = {
    id: number;
    obtainedAt: string;
    level: Level;
};

export type Certificate = BaseCertificate& {
    user: {
        name: string;
        id:number
    };
}