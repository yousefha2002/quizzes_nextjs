import { User } from "@/types/entities/User";
import { apiGet } from "@/utils/api/apiGet";

export async function getUser(token:string|undefined)
{
    return apiGet<User>(`user`,token); 
}