import { User, UserProfile } from "@/types/entities/User";
import { apiGet } from "@/utils/api/apiGet";

export async function getUser(token:string|undefined)
{
    return apiGet<User>(`user`,token); 
}

export async function getUserProfile(id:number)
{
    return apiGet<UserProfile>(`user/profile/${id}`); 
}