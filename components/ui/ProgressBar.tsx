type ProgressBarProps = {
    value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
    return (
        <div className="w-full bg-muted/20 h-3 rounded">
        <div
            className="bg-primary h-3 rounded transition-all duration-300"
            style={{ width: `${value}%` }}
        />
        </div>
    );
}
