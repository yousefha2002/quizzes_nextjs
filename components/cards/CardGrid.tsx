import React from "react";

interface CardGridProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    className?: string;
}

export default function CardGrid<T>({ items, renderItem, className = "" }: CardGridProps<T>) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}>
            {items.map((item) => renderItem(item))}
        </div>
    );
}