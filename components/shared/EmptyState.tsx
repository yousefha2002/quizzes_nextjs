// components/shared/EmptyState.tsx
import { ReactNode } from "react";

interface EmptyStateProps {
    title?: string;
    message?: string;
}

export default function EmptyState({
    title = "No Results Found",
    message = "There is nothing to show here yet.",
}: EmptyStateProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center py-16 text-white">
        <div className="text-5xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground text-sm max-w-md">{message}</p>
        </div>
    );
}
