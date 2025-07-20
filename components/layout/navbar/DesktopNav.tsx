import NavLinks from './NavLinks';

type Props = {
    isLoggedIn: boolean;
};

export default function DesktopNav({ isLoggedIn }: Props) {
    return (
        <nav className="hidden md:flex items-center gap-6 text-textBase font-medium">
            <NavLinks isLoggedIn={isLoggedIn} />
        </nav>
    );
}
