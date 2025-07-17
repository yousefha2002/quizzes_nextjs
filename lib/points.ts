import { Point } from "@/types/entities/Point";
import { apiGet } from "@/utils/api/apiGet";

export async function getUserPoints(page=1,limit=10,token:string|undefined)
{
    return apiGet<{points:Point[],totalPages:number}>(`points/user?page=${page}&limit=${limit}`,token); 
}