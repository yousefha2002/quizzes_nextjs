import InfoBlockCard from '@/components/cards/InfoBlockCard';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import privacySections from '@/data/privacySections';
import React from 'react';

export default function page() {
    return (
        <Container className="py-16">
        <SectionTitle>Privacy Policy</SectionTitle>

        <div className="space-y-8 text-muted mt-8 max-w-3xl">
            {privacySections.map((section, index) => (
                <InfoBlockCard key={index} title={section.title}>
                    {section.content}
                </InfoBlockCard>
            ))}
            <p className="pt-6 text-sm">
            For any privacy-related inquiries, contact us at <span className="text-white underline">privacy@codequiz.com</span>.
            </p>
        </div>
        </Container>
    );
}