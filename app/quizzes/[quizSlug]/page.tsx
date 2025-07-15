import QuizAttemptPage from '@/components/quiz/QuizAttemptPage';
import QuizStartPage from '@/components/quiz/QuizStartPage';
import { getUserToken } from '@/lib/auth';
import { getQuizQuestions, getQuizQuestionsLoggedIn } from '@/lib/quizes'
import React from 'react'

export default async function page({params}: {params: Promise<{quizSlug: string;}>}) {
    const {quizSlug} = await params
    
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    if(!token)
    {
        const quiz = await getQuizQuestions(+quizSlug)
        return <QuizStartPage questions={quiz.questions}/>
    }
    else{
        const attempt = await getQuizQuestionsLoggedIn(+quizSlug,tokenValue)
        return <QuizAttemptPage attempt={attempt}/>
    }
}