import React from 'react';

type MessageProps = {
    children: React.ReactNode;
    type?: 'error' | 'success';
}

export default function Message({ children, type = 'error' }: MessageProps) {
    return (
        <p className={`text-sm my-2 ${type === 'error' ? 'text-error' : 'text-success'}`}>
        {children}
        </p>
    );
}
