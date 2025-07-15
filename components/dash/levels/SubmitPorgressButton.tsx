'use client';

import { requestCertificate } from '@/actions/request-certificate';
import ErrorMessage from '@/components/ui/forms/ErrorMessage';
import ButtonLink from '@/components/ui/PrimaryButton';
import React, { useActionState } from 'react';

export default function SubmitPorgressButton({ levelId }: { levelId: number }) {
    const [state, action, isPending] = useActionState(requestCertificate, null);

    return (
        <form action={action} className="flex flex-col items-end">
            <input type="hidden" name="levelId" value={levelId} />
            <ButtonLink
                size="xs"
                href=""
                colorClass="bg-green-600 hover:bg-green-700 text-white"
            >
                Get Certificate
            </ButtonLink>
            {state?.error && (
                <ErrorMessage>{state.error}</ErrorMessage>
            )}
        </form>
    );
}