import ClientOnly from "../shared/ClientOnly";

type QuestionProps = {
    question: string;
    options: string[];
    currentIndex: number;
    onSelect: (index: number) => void;
    selectedIndex: number | null;
    total:number
};

export default function QuizQuestion({question,options,currentIndex,onSelect,selectedIndex,total}: QuestionProps) {
    return (
        <ClientOnly>
            <h2 className="text-lg font-bold mb-3">Question {currentIndex + 1} of {total}</h2>
            <p className="text-muted mb-5" dangerouslySetInnerHTML={{__html:question}}/>

            <div className="space-y-3">
                {options.map((option, i) => (
                <label
                    key={i}
                    className={`block cursor-pointer px-4 py-3 rounded border transition ${
                    selectedIndex === i
                        ? "bg-primary text-background border-primary"
                        : "bg-dark text-white border-white/10 hover:bg-white/5"
                    }`}
                >
                    <input
                        type="radio"
                        className="mr-3"
                        name={`q-${currentIndex}`}
                        checked={selectedIndex === i}
                        onChange={() => onSelect(i)}
                    />
                    {option}
                </label>
                ))}
            </div>
        </ClientOnly>
    );
}