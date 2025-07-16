import CertificateCard from '@/components/dash/certificates/CertificateCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Pagination from '@/components/shared/Pagination';
import EmptyState from '@/components/shared/EmptyState';
import { getUserToken } from '@/lib/auth';
import { getCertificatesList } from '@/lib/certificate';

type Props = {
    searchParams: Promise<{ page?: string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const currentPage = search.page ? +search.page : 1;

    const token = await getUserToken();
    const tokenValue = token?.value;

    const { certificates, totalPages } =await getCertificatesList(currentPage, 1, tokenValue);

    return (
        <>
            <SectionTitle>My Certificates</SectionTitle>

            {certificates.length === 0 ? (
                <EmptyState
                title="No Certificates"
                message="You haven't earned any certificates yet."
                />
            ) : (
                <div className="flex flex-col gap-6 mt-6">
                {certificates.map((cert) => (
                    <CertificateCard key={cert.id} {...cert} />
                ))}
                </div>
            )}

            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
        </>
    );
}