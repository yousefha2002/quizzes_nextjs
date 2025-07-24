import LoginForm from '@/components/auth/LoginForm'
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
    return (
        <Container className="py-16">
            <SectionTitle>Welcome Back</SectionTitle>
            <ClientOnly><LoginForm redirectTo={redirectTo}/></ClientOnly>
            <p className="text-sm text-center text-gray-400 mt-6">
                Don’t have an account?{' '}
                <Link href={`/signup?redirect=${encodeURIComponent(redirectTo)}`} className="text-primary hover:underline">
                    Create one
                </Link>
            </p>
        </Container>
    );
}
