import SectionTitle from '@/components/ui/SectionTitle';
import ClientOnly from '@/components/shared/ClientOnly';
import EmailForm from '@/components/auth/EmailForm';

export default function page() {
    return (
        <>
            <SectionTitle>Change Email</SectionTitle>
            <ClientOnly>
                <EmailForm/>
            </ClientOnly>
        </>
    );
}