'use server';
import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';
import { FormResponse } from '@/types/common/FormResponse';
import { getUserToken } from '@/lib/auth';

export async function updateProfile(_: unknown, formData: FormData): Promise<FormResponse> {
    const name = formData.get('name');
    const bio = formData.get('bio');
    const token = await getUserToken();
    const tokenValue = token?.value;

    try {
        const response = await apiPost('user/profile', 'PUT', { name, bio }, tokenValue);
        return { data: { message: response.message, name, bio } };
    } catch (err) {
        return {
        error: handleApiError(err),
        data: { name: name?.toString() || '', bio: bio?.toString() || '' },
        };
    }
}