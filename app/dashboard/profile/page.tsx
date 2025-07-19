import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { FaUserCircle, FaCalendarAlt, FaPencilAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ProfilePage() {
    return (
        <>
            <SectionTitle>My Profile</SectionTitle>

            <div className="bg-card border border-white/10 text-white rounded-lg p-8 shadow-md max-w-3xl mx-auto flex flex-col md:flex-row gap-10">

                {/* معلومات المستخدم */}
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-primary w-8 h-8" />
                        <h2 className="text-xl font-semibold">Yousef Abuhani</h2>
                    </div>

                    <div className="flex items-center gap-3 text-muted text-sm">
                        <MdEmail className="w-5 h-5" />
                        <span>yousef@example.com</span>
                    </div>

                    <div className="flex items-center gap-3 text-muted text-sm">
                        <FaCalendarAlt className="w-5 h-5" />
                        <span>Joined: July 1, 2025</span>
                    </div>
                </div>

                {/* روابط التعديل */}
                <div className="flex flex-col gap-4 text-sm w-full md:w-60">
                    <Link
                        href="/dashboard/profile/change-name"
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-white/10 rounded hover:bg-white/5 transition"
                    >
                        <FaPencilAlt className="w-4 h-4 text-primary" />
                        Change Name
                    </Link>

                    <Link
                        href="/dashboard/profile/change-email"
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-white/10 rounded hover:bg-white/5 transition"
                    >
                        <MdEmail className="w-4 h-4 text-primary" />
                        Change Email
                    </Link>

                    <Link
                        href="/dashboard/profile/change-password"
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-white/10 rounded hover:bg-white/5 transition"
                    >
                        <FaLock className="w-4 h-4 text-primary" />
                        Change Password
                    </Link>
                </div>
            </div>
        </>
    );
}
