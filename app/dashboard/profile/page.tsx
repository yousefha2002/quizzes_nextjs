import SectionTitle from "@/components/ui/SectionTitle";

export default function ProfilePage() {
    return (
        <>
            <SectionTitle>My Profile</SectionTitle>
            <div className="bg-card border border-white/10 text-white rounded p-6 shadow-md space-y-4">
                <div>
                    <h2 className="text-xl font-semibold">Yousef Abuhani</h2>
                    <p className="text-muted text-sm">yousef@example.com</p>
                    <p className="text-muted text-xs">Joined: July 1, 2025</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                    <div>
                        <span className="block font-semibold">14</span>
                        <span className="text-muted">Passed Quizzes</span>
                    </div>
                    <div>
                        <span className="block font-semibold">27</span>
                        <span className="text-muted">Attempts</span>
                    </div>
                    <div>
                        <span className="block font-semibold">5</span>
                        <span className="text-muted">Certificates</span>
                    </div>
                    <div>
                        <span className="block font-semibold">6</span>
                        <span className="text-muted">Categories Started</span>
                    </div>
                    <div>
                        <span className="block font-semibold">720</span>
                        <span className="text-muted">Points</span>
                    </div>
                </div>
            </div>
        </>
    );
}