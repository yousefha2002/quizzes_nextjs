import { Certificate } from "@/types/entities/Certificate";
import { apiGet } from "@/utils/api/apiGet";

export async function getCertificate(id:number,token:string|undefined)
{
    return apiGet<Certificate>(`certificate/${id}`,token); 
}