import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { project_title } from '@/utils/constants';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
            <Image
                src="/favIcon.png"  
                alt="zerotodev Logo"
                width={40}
                height={40}
                priority
            />
            <span>{project_title}</span>
        </Link>
    );
}
