'use server'
import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';
import { FormResponse } from '@/types/common/FormResponse';
import { getUserToken } from '@/lib/auth';

export async function changeName(_: unknown, formData: FormData): Promise<FormResponse> {
    const newName = formData.get('name');
    const token = await getUserToken();
    const tokenValue = token ? token.value : undefined;

    try {
        const response = await apiPost(`user/name`, 'PUT', { name:newName },tokenValue);
        return { data: { message: response.message } };
    } catch (err) {
        return { error: handleApiError(err), data: { newName } };
    }
}