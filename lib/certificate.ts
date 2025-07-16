import { BaseCertificate, Certificate } from "@/types/entities/Certificate";
import { apiGet } from "@/utils/api/apiGet";

export async function getCertificate(id:number,token:string|undefined)
{
    return apiGet<Certificate>(`certificate/${id}`,token); 
}

export async function getCertificatesList(page=1,limit=10,token:string|undefined)
{
    return apiGet<{certificates:BaseCertificate[],totalPages:number}>(`certificate/all?page=${page}&limit=${limit}`,token); 
}