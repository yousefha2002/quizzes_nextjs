import LoginForm from '@/components/auth/LoginForm'
import ClientOnly from '@/components/shared/ClientOnly'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <Container className="py-16">
            <SectionTitle>Welcome Back</SectionTitle>
            <ClientOnly><LoginForm /></ClientOnly>
            <p className="text-sm text-center text-gray-400 mt-6">
                Don’t have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline">
                    Create one
                </Link>
            </p>
        </Container>
    );
}
