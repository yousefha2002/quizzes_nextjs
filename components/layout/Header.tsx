'use client'
import NavBar from './navbar/Navbar';
import { usePathname } from 'next/navigation';
import Logo from './navbar/Logo';

export default function Header({isLoggedIn}:{isLoggedIn:boolean}) {
    const pathname = usePathname();
    if (pathname.startsWith('/dashboard')) return null;

    return (
        <header className="bg-background shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Logo/>
                <NavBar isLoggedIn={isLoggedIn} />
            </div>
        </header>
    );
}