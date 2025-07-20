import { FiX } from 'react-icons/fi';
import NavLinks from './NavLinks';

type Props = {
    isLoggedIn: boolean;
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenu({ isLoggedIn, isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden fixed inset-0 bg-background/95 z-50 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-textBase" aria-label="Close menu">
            <FiX size={28} />
        </button>

        <NavLinks isLoggedIn={isLoggedIn} onLinkClick={onClose} />
        </div>
    );
}