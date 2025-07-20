import Link from 'next/link';
import LogoutButton from './LogoutButton';
import ButtonLink from '@/components/ui/PrimaryButton';

type Props = {
    isLoggedIn: boolean;
    onLinkClick?: () => void; 
};

export default function NavLinks({ isLoggedIn, onLinkClick }: Props) {
    return (
        <>
        <Link href="/categories" className="text-md text-textBase hover:text-primary transition" onClick={onLinkClick}>
            Quizzes
        </Link>

        {isLoggedIn && (
            <Link href="/dashboard" className="text-md text-textBase hover:text-primary transition" onClick={onLinkClick}>
            Dashboard
            </Link>
        )}

        {!isLoggedIn ? (
            <ButtonLink href="/login" size="sm">
            Login
            </ButtonLink>
        ) : (
            <LogoutButton />
        )}
        </>
    );
}