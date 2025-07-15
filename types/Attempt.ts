export type SubmittedAttempt = {
  id: number;
  score: number;
  createdAt: string,
  submittedAt:string,
  quiz: {
    title: string;
    passScore: number;
    numberOfQuestions:number
  };
};