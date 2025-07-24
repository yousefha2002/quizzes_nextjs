'use client';
import React, { useActionState } from 'react';
import InputField from '../ui/forms/InputField';
import { MdPerson } from 'react-icons/md';
import SubmitButton from '../ui/forms/SubmitButton';
import Message from '../ui/forms/Message';
import { updateProfile } from '@/actions/update-profile';
import TextareaField from '../ui/forms/TextAreaField';

export default function ProfileForm({defaultName,defaultBio,}: {defaultName: string;defaultBio?: string}) {
    const [state, action, isPending] = useActionState(updateProfile, null);

    return (
        <form
        action={action}
        className="bg-card p-6 rounded border border-white/10 shadow space-y-6"
        >
        <div>
            <label className="text-sm text-muted block mb-2">Name</label>
            <InputField
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            icon={MdPerson}
            defaultValue={state?.data?.name || defaultName}
            />
        </div>
        <div>
            <label className="text-sm text-muted block mb-2">Bio</label>
            <TextareaField
            name="bio"
            placeholder="Tell us a bit about yourself..."
            defaultValue={state?.data?.bio || defaultBio}
            />
        </div>
        <Message>{state?.error}</Message>
        <Message type="success">{state?.data?.message}</Message>
        <SubmitButton isPending={isPending}>Update Profile</SubmitButton>
        </form>
    );
}