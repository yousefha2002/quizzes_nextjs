import InfoBlockCard from '@/components/cards/InfoBlockCard';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import termsSections from '@/data/termsSections';
import React from 'react';

export default function page() {
return (
    <Container className="py-16">
        <SectionTitle>Terms Of Use</SectionTitle>

        <div className="space-y-8 text-muted mt-8 max-w-3xl">
            {termsSections.map((section, index) => (
                <InfoBlockCard key={index} title={section.title}>{section.content}</InfoBlockCard>
            ))}
            <p className="pt-6 text-sm">
            For questions, contact us at <span className="text-white underline">support@codequiz.com</span>.
            </p>
        </div>
        </Container>
    );
}