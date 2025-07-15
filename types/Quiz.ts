export type QuizStatus = "passed" | "failed";

export type QuizCardProps = {
    id:number
    title: string;
    numberOfQuestions: number;
    userStatus?: QuizStatus;
}

export type PublicQuizDetails = {
    id:number,
    title: string;
    headline: string;
    numberOfQuestions: number;
    passScore: number;
    level: {
        title: string;
        category: {
        title: string;
        };
    };
};

export type UserQuiz = {
    quiz: {
        id: number;
        title: string;
        level:{
        title:string,
        category:{title:string}
    }
    };
};