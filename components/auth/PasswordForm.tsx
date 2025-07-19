'use client';
import React, { useActionState } from 'react';
import InputField from '../ui/forms/InputField';
import { RiLockPasswordFill } from 'react-icons/ri';
import SubmitButton from '../ui/forms/SubmitButton';
import { changePassword } from '@/actions/change-password';
import Message from '../ui/forms/Message';

export default function PasswordForm() {
    const [state, action, isPending] = useActionState(changePassword, null);

    return (
        <form action={action} className="bg-card p-6 rounded border border-white/10 shadow space-y-6">
            <div>
                <label className="text-sm text-muted block mb-2">Current Password</label>
                <InputField
                    name="oldPassword"
                    type="password"
                    required
                    placeholder="Enter your current password"
                    icon={RiLockPasswordFill}
                    defaultValue={state?.data?.oldPassword || ''}
                />
            </div>
            <div>
                <label className="text-sm text-muted block mb-2">New Password</label>
                <InputField
                    name="newPassword"
                    type="password"
                    required
                    placeholder="Enter your new password"
                    icon={RiLockPasswordFill}
                    defaultValue={state?.data?.newPassword || ''}
                />
            </div>

            <Message>{state?.error}</Message>
            <Message type="success">{state?.data?.message}</Message>

            <SubmitButton isPending={isPending}>Update Password</SubmitButton>
        </form>
    );
}
