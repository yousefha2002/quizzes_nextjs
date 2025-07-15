'use server';

import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';
import { FormResponse } from '@/types/common/FormResponse';
import { getUserToken } from '@/lib/auth';

export async function requestCertificate(_: unknown, formData: FormData): Promise<FormResponse> {
    const levelId = formData.get('levelId');
    const token = await getUserToken();
    const tokenValue = token ? token.value : undefined;

    try {
        const response = await apiPost(`certificate/level/${levelId}`, 'POST', {},tokenValue);
        return { data: { certificateId: response.id } };
    } catch (err) {
        return { error: handleApiError(err) };
    }
}