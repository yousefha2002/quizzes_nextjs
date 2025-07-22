import SectionTitle from '@/components/ui/SectionTitle';
import ClientOnly from '@/components/shared/ClientOnly';
import NameForm from '@/components/auth/NameForm';
import { getUser } from '@/lib/user';
import { getUserToken } from '@/lib/auth';

export default async function page() {
    const token = await getUserToken();
    const tokenValue = token?.value;
    const user = await getUser(tokenValue)
    return (
        <>
            <SectionTitle>Change Name</SectionTitle>
            <ClientOnly>
                <NameForm defaultName={user.name}/>
            </ClientOnly>
        </>
    );
}