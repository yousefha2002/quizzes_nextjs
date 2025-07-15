'use client';

import React, { useActionState } from 'react';
import InputField from '@/components/ui/forms/InputField';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import SubmitButton from '../ui/forms/SubmitButton';
import { login } from '@/actions/login';
import ErrorMessage from '../ui/forms/ErrorMessage';
import { redirect } from 'next/navigation';

export default function LoginForm() {
    const [state, action, isPending] = useActionState(login, null);
    if(state?.data?.message)
    {
        redirect('/dashboard')
    }
    return (
        <form className="space-y-4" action={action}>
            <InputField
                name="email"
                type="email"
                placeholder="Email"
                required
                icon={FaEnvelope}
                defaultValue={state?.data?.email || ''}
            />
            <InputField
                name="password"
                type="password"
                placeholder="Password"
                required
                icon={FaLock}
                defaultValue={state?.data?.password || ''}
            />
            <ErrorMessage>{state?.error}</ErrorMessage>
            <SubmitButton isPending={isPending}>LogIn</SubmitButton>
        </form>
    );
}