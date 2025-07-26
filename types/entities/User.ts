export type User = {
    id: number;
    createdAt: string;
    email:string
    name:string
    bio?:string
};

export type UserProfile = {
    id: number;
    createdAt: string;
    name:string
    bio?:string,
    certificates:number,
    attemptsCount:number,
    totalPoints:number
}
