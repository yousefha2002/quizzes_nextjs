'use client'
import React, { useActionState } from 'react'
import InputField from '@/components/ui/forms/InputField';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import SubmitButton from '../ui/forms/SubmitButton';
import { signup } from '@/actions/signup';
import ErrorMessage from '../ui/forms/ErrorMessage';
import { redirect } from 'next/navigation';
export default function SignupForm() {
    const [state, action, isPending] = useActionState(signup, null);
    if(state?.data?.message)
    {
        redirect('/dashboard')        
    }
    return (
        <form className="space-y-4" action={action}>
                <InputField
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    icon={FaUser}
                    defaultValue={state?.data?.name || ''}
                />
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
                <SubmitButton isPending={isPending}>Sign Up</SubmitButton>
        </form>
    )
}