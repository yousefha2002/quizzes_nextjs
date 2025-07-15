'use client';

import { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import { AiOutlineMenu } from 'react-icons/ai';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-light text-dark flex flex-col lg:flex-row">
        {/* Topbar for mobile */}
        <div className="lg:hidden flex items-center justify-start p-4 bg-dark text-white shadow space-x-2">
            <button onClick={() => setIsSidebarOpen(true)} className="text-2xl">
            <AiOutlineMenu />
            </button>
        </div>

        {/* Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main content */}
        <main className="flex-1 lg:ml-64 px-4 pt-8">{children}</main>
        </div>
    );
}
