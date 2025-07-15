import { InProgressAttempt, SubmittedAttempt, UserQuizAttempt } from "@/types/entities/Attempt";
import { QuizInfo } from "@/types/entities/Quiz";
import { apiGet } from "@/utils/api/apiGet";

export async function getSubmittedAttempt(attemptId:number,token:string|undefined)
{
    return apiGet<SubmittedAttempt>(`attempt/submitted/${attemptId}`,token);
}

export async function getInProressAttemptsForUser(page:number,limit:number,token:string|undefined)
{
    return apiGet<{attempts:InProgressAttempt[],totalPages:number}>(`attempt/in-progress/user?page=${page}&limit=${limit}`,token);
}

export async function getUserQuizAttempt(quizId:number,page:number,limit:number,token:string|undefined)
{
    return apiGet<{attempts:UserQuizAttempt[],totalPages:number,quiz:QuizInfo}>(`attempt/byQuiz/${quizId}/byUser?page=${page}&limit=${limit}`,token);
}