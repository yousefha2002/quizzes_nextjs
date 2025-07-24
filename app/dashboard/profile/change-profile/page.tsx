import SectionTitle from '@/components/ui/SectionTitle';
import ClientOnly from '@/components/shared/ClientOnly';
import { getUser } from '@/lib/user';
import { getUserToken } from '@/lib/auth';
import ProfileForm from '@/components/auth/ProfileForm';

export default async function page() {
    const token = await getUserToken();
    const tokenValue = token?.value;
    const user = await getUser(tokenValue)
    return (
        <>
            <SectionTitle>Change Name</SectionTitle>
            <ClientOnly>
                <ProfileForm defaultBio={user.bio} defaultName={user.name}/>
            </ClientOnly>
        </>
    );
}