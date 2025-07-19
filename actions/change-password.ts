'use server'
import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';
import { FormResponse } from '@/types/common/FormResponse';
import { getUserToken } from '@/lib/auth';

export async function changePassword(_: unknown, formData: FormData): Promise<FormResponse> {
    const oldPassword = formData.get('oldPassword');
    const newPassword = formData.get('newPassword');
    const token = await getUserToken();
    const tokenValue = token ? token.value : undefined;

    try {
        const response = await apiPost(`user/password`, 'PUT', { newPassword,oldPassword },tokenValue);
        return { data: { message: response.message } };
    } catch (err) {
        return { error: handleApiError(err), data: { oldPassword,newPassword } };
    }
}