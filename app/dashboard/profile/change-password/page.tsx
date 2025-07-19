import SectionTitle from '@/components/ui/SectionTitle';
import ClientOnly from '@/components/shared/ClientOnly';
import PasswordForm from '@/components/auth/PasswordForm';

export default function page() {
    return (
        <>
            <SectionTitle>Change Password</SectionTitle>
            <ClientOnly>
                <PasswordForm/>
            </ClientOnly>
        </>
    );
}