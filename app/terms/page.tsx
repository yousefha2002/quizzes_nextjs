import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

export default function page() {
return (
    <Container className="py-16">
        <SectionTitle>Terms Of Use</SectionTitle>

        <div className="space-y-8 text-muted mt-8 max-w-3xl">
            <section>
            <h2 className="text-white font-semibold text-lg mb-2">1. Account Types</h2>
            <p>
                Guests can explore quizzes without registration. Registered users enjoy extra features such as quiz tracking, earning points, and receiving certificates.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">2. Data We Collect</h2>
            <p>
                For registered users, we only store your <span className="text-white">email address</span> and <span className="text-white">username</span>. No sensitive personal data is collected.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">3. Usage Rules</h2>
            <p>
                The platform is for educational use only. Misuse—such as sharing accounts, cheating, or exploiting the system—may lead to restricted access or account removal.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">4. Ownership</h2>
            <p>
                All content including quizzes, design, and logic is the intellectual property of CodeQuiz. You may not copy or distribute any part of the platform without permission.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">5. Disclaimer</h2>
            <p>
                We aim to provide accurate and helpful content. However, we are not liable for any issues related to scoring errors, availability, or technical failures.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">6. Updates to Terms</h2>
            <p>
                Terms of use may be updated occasionally. Your continued use of the platform means you accept the latest version of the terms.
            </p>
            </section>

            <p className="pt-6 text-sm">
            For questions, contact us at <span className="text-white underline">support@codequiz.com</span>.
            </p>
        </div>
        </Container>
    );
}