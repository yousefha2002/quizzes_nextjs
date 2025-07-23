import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { getTopUsers } from '@/lib/leaderboard';
import { getUserToken } from '@/lib/auth';
import React from 'react';

export default async function LeaderboardPage() {
    const token = await getUserToken();
    const tokenValue = token?.value;

    const [topUsers] = await Promise.all([
        getTopUsers(50),
        // tokenValue ? getUserRank(tokenValue) : Promise.resolve(null)
    ]);

    return (
        <Container className="py-16">
        <SectionTitle>Leaderboard</SectionTitle>

        {/* {userRank && (
            <div className="mb-8 p-4 bg-darkBlueGray text-white rounded shadow border border-white/10">
            <p className="text-sm text-muted">Your Rank</p>
            <div className="flex items-center justify-between text-lg font-semibold">
                <span>{userRank.rank}. {userRank.name}</span>
                <span>{userRank.points} pts</span>
            </div>
            </div>
        )} */}

        {/* أعلى المستخدمين */}
        <div className="bg-card rounded shadow overflow-x-auto border border-white/10">
            <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-background text-muted border-b border-white/10">
                <tr>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Points</th>
                </tr>
            </thead>
            <tbody>
                {topUsers.map((user) => (
                <tr
                    key={user.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                >
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.points}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </Container>
    );
}