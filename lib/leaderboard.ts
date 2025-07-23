import { LeaderboardUser } from "@/types/entities/Leaderboard";
import { apiGet } from "@/utils/api/apiGet";

export async function getTopUsers(limit: number) {
    return apiGet<LeaderboardUser[]>(`user/top?limit=${limit}`);
}