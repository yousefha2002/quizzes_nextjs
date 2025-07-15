import Link from "next/link";
import Container from "../ui/Container";
import ButtonLink from "../ui/PrimaryButton";

export default function HeroSection() {
    return (
        <section className="bg-background text-textBase py-20">
            <Container className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                    Challenge Your Programming Skills
                </h1>
                <p className="text-muted text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                    Take interactive quizzes in React, JavaScript, HTML, and more.
                    Learn while you play — and earn certificates as you go!
                </p>
                <ButtonLink href="/categories" size="lg">Get Started</ButtonLink>
            </Container>
        </section>
    );
}