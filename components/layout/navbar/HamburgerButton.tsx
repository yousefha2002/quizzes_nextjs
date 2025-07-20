import { FiMenu, FiX } from 'react-icons/fi';

type Props = {
    isOpen: boolean;
    toggleMenu: () => void;
};

export default function HamburgerButton({ isOpen, toggleMenu }: Props) {
    return (
        <button
        onClick={toggleMenu}
        className="md:hidden text-textBase focus:outline-none"
        aria-label="Toggle menu"
        >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
    );
}