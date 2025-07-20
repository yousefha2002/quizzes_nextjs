'use client';

import dashboardLinks from '@/data/dashboardLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardSidebarContent() {
    const pathname = usePathname();

    return (
        <nav className="space-y-2">
            {dashboardLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${
                            isActive
                                ? 'bg-primary text-white'
                                : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}