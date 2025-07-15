import { notFound, redirect } from 'next/navigation';

export function handlePageError(error: any) {
    if (error?.status === 404) return notFound();
    if (error?.status === 401) return redirect('/login');
    throw error; // أي خطأ ثاني خلّيه يطلع (Next.js رح يعرض صفحة 500)
}