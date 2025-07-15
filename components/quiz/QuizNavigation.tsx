type QuizNavigationProps = {
    currentIndex: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
    onSubmit: () => void;
    canProceed:boolean
    isSubmitting:boolean
};

export default function QuizNavigation({currentIndex,total,onPrev,onNext,onSubmit,canProceed,isSubmitting}: QuizNavigationProps) {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === total - 1;

    return (
        <div className="flex justify-between mt-6">
        <button
            onClick={onPrev}
            disabled={isFirst}
            className="bg-muted text-white px-4 py-2 rounded hover:bg-muted/80 disabled:opacity-50"
        >
            Prev
        </button>

        {isLast ? (
            <button
            onClick={onSubmit}
            disabled={!canProceed||isSubmitting}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
            {isSubmitting?"Submitting...":"Submit"}
            </button>
        ) : (
            <button
            onClick={onNext}
            disabled={!canProceed}
            className="bg-primary text-background px-4 py-2 rounded hover:bg-primary/90 disabled:opacity-50"
            >
            Next
            </button>
        )}
        </div>
    );
}