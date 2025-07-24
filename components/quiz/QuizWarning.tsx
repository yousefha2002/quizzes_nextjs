'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function QuizWarning() {
    const pathname = usePathname();

    return (
        <div className="bg-card border border-yellow-500/30 text-yellow-300 p-5 rounded-lg mb-6 shadow-md">
            <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">⚠️</span>
                <div className="space-y-1 text-sm">
                <p className="font-medium">You're viewing a demo version of this quiz.</p>
                <p className="text-muted text-xs">
                    Your progress won't be saved and certificates won't be awarded unless you're logged in.
                </p>
                <Link
                    href={`/login?redirect=${encodeURIComponent(pathname)}`}
                    className="inline-block mt-2 text-primary font-semibold hover:underline transition"
                >
                    🔒 Log in to start earning points and certificates →
                </Link>
                </div>
            </div>
        </div>
    );
}