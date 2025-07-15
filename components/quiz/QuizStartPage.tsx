'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResultDisplay from './QuizResultDisplay';
import { QuestionDto } from '@/types/Quiz-Questions';

export default function QuizStartPage({ questions }: { questions: QuestionDto[] }) {
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState(''); // حالة لتخزين رسالة الخطأ

    const handleSelect = (questionIndex: number, answerIndex: number) => {
        const updated = [...answers];
        updated[questionIndex] = answerIndex;
        setAnswers(updated);
        setError(''); // إزالة الخطأ عند اختيار إجابة
    };

    const handleSubmit = () => {
        const hasUnanswered = answers.some(answer => answer === null);
        if (hasUnanswered) {
        setError('Please answer all questions before submitting the quiz.');
        return;
        }

        let localScore = 0;
        questions.forEach((q, i) => {
        const selected = answers[i];
        if (selected !== null && q.answers[selected]?.isCorrect) {
            localScore++;
        }
        });

        setScore(localScore);
        setIsFinished(true);
        setError('');
    };

    const handleRetry = () => {
        setAnswers(Array(questions.length).fill(null));
        setScore(0);
        setIsFinished(false);
        setError('');
    };

    if (isFinished) {
        return (
        <Container className="pt-10">
            <QuizResultDisplay score={score} total={questions.length} onRetry={handleRetry} />
        </Container>
        );
    }

    return (
        <Container className="pt-10">
        <div className="space-y-8">
            {questions.map((question, index) => (
            <div
                key={index}
                className="bg-card text-white p-6 rounded shadow border border-white/10"
            >
                <QuizQuestion
                currentIndex={index}
                total={questions.length}
                question={question.title}
                options={question.answers.map((a) => a.title)}
                selectedIndex={answers[index]}
                onSelect={(answerIndex) => handleSelect(index, answerIndex)}
                />
            </div>
            ))}

            {error && (
                <p className="text-error text-center bg-[#ffe5e5] border border-error/30 p-3 rounded mb-4">
                    {error}
                </p>
            )}

            <div className="text-center mt-8">
            <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-primary text-white rounded hover:bg-opacity-90 transition"
            >
                Submit Quiz
            </button>
            </div>
        </div>
        </Container>
    );
}