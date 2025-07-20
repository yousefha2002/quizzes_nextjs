'use client';

import { AiOutlineClose } from 'react-icons/ai';
import dashboardLinks from '@/data/dashboardLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardMobileMenu({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const pathname = usePathname();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-dark text-white shadow-md flex-row-reverse">
                <button
                    onClick={onClose}
                    className="text-white text-2xl"
                    aria-label="Close menu"
                >
                    <AiOutlineClose />
                </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 px-4 text-lg">
                {dashboardLinks.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            onClick={onClose}
                            className={`w-full text-center py-3 rounded-md font-medium transition ${
                                isActive
                                    ? 'bg-primary text-white'
                                    : 'text-white hover:bg-white/10'
                            }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}