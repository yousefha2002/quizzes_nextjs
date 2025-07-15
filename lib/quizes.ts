import { AttemptAnswerResponse } from '@/types/entities/Attempt';
import { QuizQuestionsDto } from '@/types/entities/Question';
import { PublicQuizDetails, QuizCardProps, UserQuiz } from '@/types/entities/Quiz';
import { apiGet } from '@/utils/api/apiGet';

export async function getPublicQuizDetails(category: string, level: string, quiz: string) {
    return apiGet<PublicQuizDetails>(`quiz/public/${category}/${level}/${quiz}`);
}

export async function getUserQuizzes(page:number,limit:number,token:string|undefined)
{
    return apiGet<{quizzes:UserQuiz[],totalPages:number}>(`attempt/user_quizzes?page=${page}&limit=${limit}`,token); 
}

/** quizzes list */
export async function getQuizzesLoggedIn(category:string,level:string,token:string|undefined) {
    return apiGet<QuizCardProps[]>(`quiz/loggedIn/byLevel/${category}/${level}`,token);
}

export async function getQuizzesForVisitor(category:string,level:string) {
    return apiGet<QuizCardProps[]>(`quiz/byLevel/${category}/${level}`);
}

/** get quiz questions to present it */

export async function getQuizQuestions(quizId:number)
{
    return apiGet<QuizQuestionsDto>(`quiz/questions/${quizId}`);
}

export async function getQuizQuestionsLoggedIn(quizId:number,token:string|undefined)
{
    return apiGet<AttemptAnswerResponse>(`attempt/start/${quizId}`,token);
}