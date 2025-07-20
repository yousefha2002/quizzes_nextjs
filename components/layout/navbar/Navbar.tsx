'use client';

import { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import HamburgerButton from './HamburgerButton';

type Props = {
    isLoggedIn: boolean;
};

export default function NavBar({ isLoggedIn }: Props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <DesktopNav isLoggedIn={isLoggedIn} />
            <HamburgerButton isOpen={menuOpen} toggleMenu={toggleMenu} />
            <MobileMenu isOpen={menuOpen} onClose={closeMenu} isLoggedIn={isLoggedIn} />
        </>
    );
}