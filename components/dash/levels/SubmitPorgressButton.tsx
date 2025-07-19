'use client';

import { requestCertificate } from '@/actions/request-certificate';
import ErrorMessage from '@/components/ui/forms/Message';
import { redirect } from 'next/navigation';
import React, { useActionState } from 'react';

export default function SubmitProgressButton({ levelId }: { levelId: number }) {
    const [state, action, isPending] = useActionState(requestCertificate, null);

    if (state?.data?.certificateId) {
        redirect(`/dashboard/certificates/${state.data.certificateId}`);
    }

    return (
        <form action={action} className="flex flex-col items-end gap-2 w-full">
            <input type="hidden" name="levelId" value={levelId} />
            
            <button
                type="submit"
                disabled={isPending}
                className="text-sm text-success border border-none hover:bg-success hover:text-white px-3 py-1.5 rounded-md transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isPending ? "Processing..." : "Get Certificate"}
            </button>

            {state?.error && (
                <div className="w-full text-start">
                    <p className="text-xs text-red-500 mt-1">
                        ⚠️ {state.error}
                    </p>
                </div>
            )}
        </form>
    );
}