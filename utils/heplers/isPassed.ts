export function isPassed(score: number, numberOfQuestions: number, passScore: number): boolean {
    const percentage = (score / numberOfQuestions) * 100;
    return percentage >= passScore;
}