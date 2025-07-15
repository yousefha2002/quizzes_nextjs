import Link from 'next/link';
import ButtonLink from '../ui/PrimaryButton';
import { getUserToken } from '@/lib/auth';
import LogoutButton from './LogoutButton';

export default async function Header() {
    const token = await getUserToken()
    return (
        <header className="bg-background shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-primary font-bold text-xl">
                CodeQuiz
                </Link>
                <nav className="flex items-center gap-6 text-textBase font-medium">
                    <Link href="/categories" className="hover:text-primary transition">Quizzes</Link>
                    {
                        !token
                        ?
                        <ButtonLink href="/login" size="sm">Login</ButtonLink>
                        :
                        <LogoutButton/>
                    }
                </nav>
            </div>
        </header>
    );
}