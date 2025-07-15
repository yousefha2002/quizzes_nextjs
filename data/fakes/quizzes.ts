import { quizCard } from "@/types/fakes/quiz";

export const quizzesLoggedIn : quizCard[]= [
    { title: "Intro to React", questionsCount: 10, status: "not-started" },
    { title: "JSX Basics", questionsCount: 12, status: "passed" },
    { title: "React State", questionsCount: 15, status: "passed" },
    { title: "React Props", questionsCount: 8, status: "failed" }
]

export const quizzesLoggedOut = [
    { title: "Intro to React", questionsCount: 10},
    { title: "JSX Basics", questionsCount: 12,},
    { title: "React State", questionsCount: 15,},
    { title: "React Props", questionsCount: 8 }
]