import { UserStatistic } from "@/types/entities/Satistic";
import { apiGet } from "@/utils/api/apiGet";

export async function getUserStatistic(token:string|undefined)
{
    return apiGet<UserStatistic>(`statistic/me`,token); 
}