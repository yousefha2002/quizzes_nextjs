'use client';

import dashboardLinks from '@/data/dashboardLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';

export default function DashboardSidebar({isOpen,onClose,}: {isOpen?: boolean;onClose?: () => void;}) {
    const pathname = usePathname();

    const sidebarContent = (
        <nav className="space-y-1 px-4 mt-10">
        {dashboardLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            const base = 'block px-3 py-2 rounded hover:bg-white/10 transition hover:text-white';
            const active = 'bg-primary text-card';
            return (
            <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`${base} ${isActive ? active : ''}`}
            >
                {label}
            </Link>
            );
        })}
        </nav>
    );

    return (
        <>
        {/* Sidebar for large screens */}
        <aside className="hidden lg:block fixed left-0 top-0 w-64 bg-dark text-white h-full z-40 border-r border-white/10 pt-10">
            {sidebarContent}
        </aside>

        {/* Sidebar for mobile */}
        {isOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex">
            <div className="bg-dark text-white min-h-screen py-4 w-full lg:w-64 bg-card">
                <div className="flex justify-end mb-4 px-4">
                <button onClick={onClose} className="text-white text-2xl font-bold">
                    <AiOutlineClose />
                </button>
                </div>
                {sidebarContent}
            </div>
            </div>
        )}
        </>
    );
}