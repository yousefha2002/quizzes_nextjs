import Link from "next/link";
import { FaPencilAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function UserActions() {
    return (
        <section className="w-full my-8 bg-card rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="text-lg font-semibold text-textBase mb-4">Manage Your Profile</h3>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link
                    href="/dashboard/profile/change-profile"
                    className="flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-background text-textBase border border-white/10 hover:border-primary hover:bg-white/5 transition"
                >
                    <FaPencilAlt className="w-5 h-5 text-primary" />
                    <span>Change Profile</span>
                </Link>

                <Link
                    href="/dashboard/profile/change-email"
                    className="flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-background text-textBase border border-white/10 hover:border-secondary hover:bg-white/5 transition"
                >
                    <MdEmail className="w-5 h-5 text-secondary" />
                    <span>Change Email</span>
                </Link>

                <Link
                    href="/dashboard/profile/change-password"
                    className="flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-background text-textBase border border-white/10 hover:border-error hover:bg-white/5 transition"
                >
                    <FaLock className="w-5 h-5 text-error" />
                    <span>Change Password</span>
                </Link>
            </div>
        </section>
    );
}