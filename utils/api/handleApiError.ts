export function handleApiError(response: any): string {
    if (typeof response === 'string') return response;
    const message = response?.message;
    if (Array.isArray(message)) return message[0];
    if (typeof message === 'string') return message;
    if (typeof message === 'object') return Object.values(message)[0] as string;
    return 'unexpected error';
}