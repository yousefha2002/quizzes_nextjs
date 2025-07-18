import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

export default function page() {
    return (
        <Container className="py-16">
        <SectionTitle>Privacy Policy</SectionTitle>

        <div className="space-y-8 text-muted mt-8 max-w-3xl">
            <section>
            <h2 className="text-white font-semibold text-lg mb-2">1. Information We Collect</h2>
            <p>
                We only collect essential data required for your experience on the platform, such as your <span className="text-white">username</span> and <span className="text-white">email</span> (if you register).
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">2. How We Use Your Data</h2>
            <p>
                Your data is used to personalize your experience, save quiz attempts, display your certificates, and calculate points. We do not use your data for marketing or sell it to third parties.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">3. Data Storage & Security</h2>
            <p>
                All user data is securely stored using modern encryption techniques. Access to this data is restricted and handled with care to ensure your privacy.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">4. Cookies</h2>
            <p>
                We use cookies to manage your session (e.g., keeping you logged in). These cookies are strictly necessary for the website to function.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">5. User Rights</h2>
            <p>
                You have the right to request access to your stored data, ask for corrections, or delete your account and related information by contacting us.
            </p>
            </section>

            <section>
            <h2 className="text-white font-semibold text-lg mb-2">6. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy over time. If we make significant changes, we’ll notify you on the platform. Continued use implies your agreement with the latest version.
            </p>
            </section>

            <p className="pt-6 text-sm">
            For any privacy-related inquiries, contact us at <span className="text-white underline">privacy@codequiz.com</span>.
            </p>
        </div>
        </Container>
    );
}