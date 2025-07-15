'use server';

import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';
import { FormResponse } from '@/types/common/FormResponse';

export async function requestCertificate(_: unknown, formData: FormData): Promise<FormResponse> {
    const levelId = formData.get('levelId');

    try {
        const response = await apiPost(`certificate/level/${levelId}`, 'POST', {});
        return { data: { message: response.message } };
    } catch (err) {
        return { error: handleApiError(err) };
    }
}