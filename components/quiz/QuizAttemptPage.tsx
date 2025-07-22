'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizNavigation from '@/components/quiz/QuizNavigation';
import { saveAnswer } from '@/actions/save-asnwer';
import AlertMessage from '../ui/forms/AlertMessage';
import { submitAttempt } from '@/actions/submit-attempt';
import { redirect } from 'next/navigation';
import { AttemptAnswerResponse } from '@/types/entities/Attempt';

export default function QuizAttemptPage({ attempt }: { attempt: AttemptAnswerResponse }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(
        attempt.attemptAnswers.map(a => (a.answer ? a.answer.id : null))
    );
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // ✅ لمنع التكرار

    const questions = attempt.attemptAnswers.map(a => ({
        questionId: a.question.id,
        title: a.question.title,
        options: a.question.answers,
    }));

    const handleSelect = (answerId: number) => {
        const updated = [...answers];
        updated[currentIndex] = answerId;
        setAnswers(updated);
    };

    const showError = (message: string) => {
        setErrorMessage(message);
        setTimeout(() => setErrorMessage(null), 3000);
    };

    const saveAndMove = async (direction: 'next' | 'prev') => {
        const question = questions[currentIndex];
        const answerId = answers[currentIndex];
        const previousAnswer = attempt.attemptAnswers[currentIndex].answer?.id ?? null;

        if (direction === 'next' && answerId === null) {
            showError('Please select an answer before proceeding.');
            return;
        }

        if (answerId !== null && answerId !== previousAnswer) {
            const result = await saveAnswer({
                attemptId: attempt.id,
                questionId: question.questionId,
                answerId,
            });

            if (result.error) {
                showError(result.error);
                return;
            }

            attempt.attemptAnswers[currentIndex].answer = {
                id: answerId,
                title: '',
            };
        }

        setCurrentIndex(prev =>
            direction === 'next'
                ? Math.min(questions.length - 1, prev + 1)
                : Math.max(0, prev - 1)
        );
    };

    const handleNext = () => saveAndMove('next');
    const handlePrev = () => saveAndMove('prev');

    const handleSubmit = async () => {
        if (isSubmitting) return; // ✅ منع الضغط المتكرر

        setIsSubmitting(true);

        const currentQuestion = questions[currentIndex];
        const answerId = answers[currentIndex];
        const previousAnswer = attempt.attemptAnswers[currentIndex].answer?.id ?? null;

        if (answerId !== null && answerId !== previousAnswer) {
            const result = await saveAnswer({
                attemptId: attempt.id,
                questionId: currentQuestion.questionId,
                answerId,
            });

            if (result.error) {
                showError(result.error);
                setIsSubmitting(false);
                return;
            }
        }

        const result = await submitAttempt(attempt.id);

        if (result.error) {
            showError(result.error);
            setIsSubmitting(false);
        } else {
            redirect(`/attempt/${attempt.id}`);
        }
    };

    const canProceed = answers[currentIndex] !== null;

    return (
        <Container className="pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
                <div className="bg-card text-white p-6 rounded shadow border border-white/10 relative">
                    {errorMessage && <AlertMessage message={errorMessage} />}

                    <QuizQuestion
                        currentIndex={currentIndex}
                        question={questions[currentIndex].title}
                        options={questions[currentIndex].options.map(opt => opt.title)}
                        selectedIndex={
                            answers[currentIndex] !== null
                                ? questions[currentIndex].options.findIndex(opt => opt.id === answers[currentIndex])
                                : null
                        }
                        onSelect={(index) => {
                            const selectedAnswerId = questions[currentIndex].options[index].id;
                            handleSelect(selectedAnswerId);
                        }}
                        total={questions.length}
                    />

                    <QuizNavigation
                        canProceed={canProceed}
                        currentIndex={currentIndex}
                        total={questions.length}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </div>
        </Container>
    );
}