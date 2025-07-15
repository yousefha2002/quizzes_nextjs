export async function apiPost(endpoint: string,method: 'POST' | 'PATCH' | 'PUT' | 'DELETE',body: any,token?: string) {
    const headers: HeadersInit = {'Content-Type': 'application/json',};
    if (token) headers['Authorization'] = token;

    const url = `${process.env.API}${endpoint}`;

    const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
        throw { status: res.status, message: data.message || 'Error' };
    }

    return data;
}