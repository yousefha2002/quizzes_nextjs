'use client';

import React, { useActionState } from 'react';
import InputField from '@/components/ui/forms/InputField';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import SubmitButton from '../ui/forms/SubmitButton';
import { login } from '@/actions/login';
import { redirect } from 'next/navigation';
import Message from '../ui/forms/Message';


export default function LoginForm({redirectTo}:{redirectTo:string}) {
    const [state, action, isPending] = useActionState(login, null);
    if(state?.data?.message)
    {
        redirect(redirectTo)
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
            <Message>{state?.error}</Message>
            <SubmitButton isPending={isPending}>LogIn</SubmitButton>
        </form>
    );
}