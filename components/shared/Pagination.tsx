'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const createLink = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        return `${pathname}?${params.toString()}`;
    };

    const getPageNumbers = () => {
        const range: (number | 'dots')[] = [];
        const delta = 1;
        const left = Math.max(2, currentPage - delta);
        const right = Math.min(totalPages - 1, currentPage + delta);

        range.push(1);
        if (left > 2) range.push('dots');

        for (let i = left; i <= right; i++) {
            range.push(i);
        }

        if (right < totalPages - 1) range.push('dots');
        if (totalPages > 1) range.push(totalPages);

        return range;
    };

    return (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
            <Link href={createLink(currentPage - 1)}>
                <button
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm rounded border border-gray-600 bg-gray-800 text-gray-300 hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    Previous
                </button>
            </Link>

            {getPageNumbers().map((item, idx) =>
                item === 'dots' ? (
                    <span key={idx} className="px-3 py-2 text-gray-400 select-none">
                        ...
                    </span>
                ) : (
                    <Link key={idx} href={createLink(item)}>
                        <button
                            className={`px-3 py-2 text-sm rounded border transition-colors ${
                                item === currentPage
                                    ? 'bg-primary text-white border-primary cursor-default'
                                    : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-primary hover:text-white'
                            }`}
                        >
                            {item}
                        </button>
                    </Link>
                )
            )}

            <Link href={createLink(currentPage + 1)}>
                <button
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm rounded border border-gray-600 bg-gray-800 text-gray-300 hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    Next
                </button>
            </Link>
        </div>
    );
}