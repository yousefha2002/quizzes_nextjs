import SignupForm from '@/components/auth/SignupForm'
import ClientOnly from '@/components/shared/ClientOnly'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'
import React from 'react'

type Props = {
    searchParams: Promise<{ redirect?:string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const redirectTo = search.redirect ? search.redirect : "/";
    console.log(redirectTo)
    return (
        <Container className='py-16'>
            <SectionTitle>Create New Account</SectionTitle>
            <ClientOnly><SignupForm redirectTo={redirectTo}/></ClientOnly>
            <p className="text-sm text-center text-gray-400 mt-6">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:underline">
                    Log in
                </Link>
            </p>
        </Container>
    )
}
