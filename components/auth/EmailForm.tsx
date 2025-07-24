'use client';
import React, { useActionState } from 'react'
import InputField from '../ui/forms/InputField'
import { MdEmail } from 'react-icons/md';
import SubmitButton from '../ui/forms/SubmitButton';
import { changeEmail } from '@/actions/change-email';
import Message from '../ui/forms/Message';

export default function EmailForm() {
    const [state, action, isPending] = useActionState(changeEmail, null);
    return (
        <form 
            action={action} 
            className="bg-card p-6 rounded border border-white/10 shadow space-y-6">
            <div>
                <label 
                    className="text-sm text-muted block mb-2">
                        New Email
                </label>
                <InputField
                    name="newEmail"
                    type="email"
                    required
                    placeholder="Enter your new email"
                    icon={MdEmail}
                    defaultValue={state?.data?.newEmail || ''}
                />
            </div>
                <Message>{state?.error}</Message>
                <Message type='success'>{state?.data?.message}</Message>
                <SubmitButton isPending={isPending}>Update Email</SubmitButton>
            </form>
    )
}