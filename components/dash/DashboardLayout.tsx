'use client';

import { useState } from 'react';
import DashboardMobileMenu from './DashboardMobileMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import DashboardSidebarContent from './user_quizzes/DashboardSidebarContent';
import Logo from '../layout/navbar/Logo';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-light text-dark flex flex-col lg:flex-row">
            {/* Mobile Topbar */}
            <div className="lg:hidden flex items-center justify-between px-4 py-5 bg-background text-white shadow-md sticky top-0 z-40">
                <Logo/>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="text-2xl"
                    aria-label="Open menu"
                >
                    <AiOutlineMenu />
                </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-64 bg-dark text-white min-h-screen pt-6 px-4 border-r border-white/10 fixed left-0 top-0 z-30">
                <div className='mb-6'><Logo/></div>
                <DashboardSidebarContent />
            </aside>

            {/* Mobile Menu */}
            <DashboardMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 px-4 pt-6 pb-10">{children}</main>
        </div>
    );
}