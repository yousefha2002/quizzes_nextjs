'use server';

import { getUserToken } from '@/lib/auth';
import { FormResponse } from '@/types/common/FormResponse';
import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';

export async function saveAnswer({attemptId,questionId,answerId,}: {attemptId: number;questionId: number;answerId: number;}): Promise<FormResponse> {
    const token = await getUserToken();
    const tokenValue = token ? token.value : undefined;
    try {
        await apiPost(`attempt/answer`, 'PATCH', { attemptId, questionId, answerId }, tokenValue);
        return { data: { status: 'success' } };
    } catch (err) {
        return { error: handleApiError(err) };
    }
}