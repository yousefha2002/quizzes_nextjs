import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { getTopUsers, getUserRank } from '@/lib/leaderboard';
import { getUserToken } from '@/lib/auth';
import React from 'react';
import { FaCrown } from 'react-icons/fa';

export default async function LeaderboardPage() {
    const token = await getUserToken();
    const tokenValue = token?.value;

    const [topUsers, userRank] = await Promise.all([
        getTopUsers(50),
        tokenValue ? getUserRank(tokenValue) : Promise.resolve(null)
    ]);

    const crownColors = ['text-yellow-400', 'text-gray-300', 'text-amber-700'];

    return (
        <Container className="py-16">
            <SectionTitle>Leaderboard</SectionTitle>

            {userRank && (
                <div className="mb-8 p-4 bg-darkBlueGray text-white rounded shadow border border-white/10">
                    <p className="text-sm text-muted">Your Rank</p>
                    <div className="flex items-center justify-between text-lg font-semibold">
                        <span>{userRank.userRank}. {userRank.name}</span>
                        <span>{userRank.pointsCount} pts</span>
                    </div>
                </div>
            )}

            {/* جدول الترتيب */}
            <div className="bg-card rounded shadow overflow-x-auto border border-white/10">
                <table className="min-w-full text-sm text-left text-white">
                    <thead className="bg-background text-muted border-b border-white/10">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topUsers.map((user, index) => {
                            const isTopThree = index < 3;
                            return (
                                <tr
                                    key={user.id}
                                    className={`border-b border-white/5 transition ${
                                        isTopThree ? 'bg-background/60 font-bold' : 'hover:bg-white/5'
                                    }`}
                                >
                                    <td className="px-4 py-3">
                                        {isTopThree ? (
                                            <span className={`flex items-center gap-1 ${crownColors[index]}`}>
                                                <FaCrown className="inline-block" /> {user.userRank}
                                            </span>
                                        ) : (
                                            user.userRank
                                        )}
                                    </td>
                                    <td className="px-4 py-3">{user.name}</td>
                                    <td className="px-4 py-3">{user.pointsCount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}