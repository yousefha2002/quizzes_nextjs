import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { formatDate } from "@/utils/heplers/formatDate";
import { User } from "@/types/entities/User";

export default function UserInfo({ name, email, createdAt }: User) {
    return (
        <section className="w-full bg-card rounded-2xl p-6 shadow-md text-textBase space-y-6">
            <div className="flex items-center gap-4">
                <FaUserCircle className="text-primary w-12 h-12" />
                <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 text-muted">
                    <MdEmail className="w-5 h-5 text-primary" />
                    <span>{email}</span>
                </div>

                <div className="flex items-center gap-3 text-muted">
                    <FaCalendarAlt className="w-5 h-5 text-primary" />
                    <span>Joined: {formatDate(createdAt,false)}</span>
                </div>
            </div>
        </section>
    );
}