import CertificateDetails from '@/components/dash/certificates/CertificateDetails';
import { getUserToken } from '@/lib/auth';
import { getCertificate } from '@/lib/certificate';
import React from 'react'



export default async function page({params}:{params: Promise<{ id: string }>; }) {
    const { id } = await params
    const token = await getUserToken();
    const tokenValue = token?.value;

    const certificate = await getCertificate(+id,tokenValue)

    return (
        <CertificateDetails certificate={certificate}/>
    )
}
