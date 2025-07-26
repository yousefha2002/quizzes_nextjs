import Container from '@/components/ui/Container';
import CertificateSection from '@/components/user_profile/CertificateSection';
import UserInfoCard from '@/components/user_profile/UserInfoCard';
import Pagination from '@/components/shared/Pagination';
import EmptyState from '@/components/shared/EmptyState';
import { getCertificatesListByUser } from '@/lib/certificate';
import { getUserProfile } from '@/lib/user';
import React from 'react';

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page?: string }>;
};

export default async function page({ params, searchParams }: Props) {
    const { id } = await params;
    const userId = +id;

    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;

    const [user, certificateData] = await Promise.all([
        getUserProfile(userId),
        getCertificatesListByUser(userId, currentPage, 10),
    ]);

    const { certificates, totalPages } = certificateData;

    return (
        <Container className="py-16">
            <UserInfoCard user={user} />

            {/* Certificates Section */}
            <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Certificates</h3>

                {certificates.length === 0 ? (
                    <EmptyState
                        title="No Certificates"
                        message="This user hasn't earned any certificates yet."
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certificates.map((certificate) => (
                            <CertificateSection key={certificate.id} certificate={certificate} />
                        ))}
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="mt-8">
                        <Pagination currentPage={currentPage} totalPages={totalPages} />
                    </div>
                )}
            </div>
        </Container>
    );
}