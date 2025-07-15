import CertificateCard from '@/components/dash/certificates/CertificateCard'
import SectionTitle from '@/components/ui/SectionTitle'
import certificates from '@/data/fakes/certificates'
import React from 'react'

export default function page() {
    return (
        <>
            <SectionTitle>My Certificates</SectionTitle>
            <div className="flex flex-col gap-6 mt-6">
            {certificates.map((cert) => (
                <CertificateCard key={cert.id} {...cert} />
            ))}
            </div>
        </>
    )
}
