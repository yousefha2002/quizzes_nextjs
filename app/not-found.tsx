import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background text-textBase p-6">
            <h1 className="text-9xl font-extrabold mb-4">404</h1>
            <p className="text-xl mb-6 text-muted">The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
            >
                Back to Home
            </Link>
        </main>
    );
}