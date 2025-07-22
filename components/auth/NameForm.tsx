'use client';
import React, { useActionState } from 'react'
import InputField from '../ui/forms/InputField'
import { MdPerson } from 'react-icons/md';
import SubmitButton from '../ui/forms/SubmitButton';
import Message from '../ui/forms/Message';
import { changeName } from '@/actions/changeName';

export default function NameForm({defaultName}:{defaultName:string}) {
    const [state, action, isPending] = useActionState(changeName, null);
    return (
        <form 
            action={action} 
            className="bg-card p-6 rounded border border-white/10 shadow space-y-6">
            <div>
                <label 
                    className="text-sm text-muted block mb-2">
                        Name
                </label>
                <InputField
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    icon={MdPerson}
                    defaultValue={state?.data?.name ||defaultName}
                />
            </div>
                <Message>{state?.error}</Message>
                <Message type='success'>{state?.data?.message}</Message>
                <SubmitButton isPending={isPending}>Update Name</SubmitButton>
            </form>
    )
}