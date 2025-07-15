'use server';

import { getUserToken } from '@/lib/auth';
import { FormResponse } from '@/types/common/FormResponse';
import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';

export async function submitAttempt(attemptId:number): Promise<FormResponse> {
    const token = await getUserToken();
    const tokenValue = token ? token.value : undefined;
    try {
        await apiPost(`attempt/submit/${attemptId}`, 'PATCH', { attemptId}, tokenValue);
        return { data: { status: 'success' } };
    } catch (err) {
        return { error: handleApiError(err) };
    }
}