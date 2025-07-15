'use server'
import { apiPost } from '@/utils/api/apiPost';
import { handleApiError } from '@/utils/api/handleApiError';
import { FormResponse } from '@/types/common/FormResponse';
import { clearAuth, setUserAuth } from '@/lib/auth';

export async function login(_: unknown, formData: FormData): Promise<FormResponse> {
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await apiPost(`user/login`, 'POST', { email, password });
        if (response?.token) {
            clearAuth();
            await setUserAuth(response.token);
        }
        return { data: { message: 'success' } };
    } catch (err) {
        return { error: handleApiError(err), data: { email, password } };
    }
}