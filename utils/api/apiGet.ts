import { handlePageError } from './handlePageError';
export async function apiGet<T>(endpoint: string, token?: string): Promise<T> {
    const url = `${process.env.API}${endpoint}`;
    try {
        const res = await fetch(url, {
        headers: token
            ? {
                Authorization: `${token}`,
            }
            : {},
        cache: 'no-store',
        });

        if (!res.ok) {
        const error = { status: res.status, message: res.statusText };
        handlePageError(error);
        }

        return res.json();
    } catch (err) {
        throw err;
    }
}
