import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export default function ContactPage() {
    return (
        <Container className="py-16">
        <SectionTitle>Contact Us</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-10 text-white">
            <p className="text-muted text-lg leading-relaxed">
            For any questions or suggestions, you can contact us via email and we will respond as soon as possible.
            </p>

            <div className="bg-card border border-white/10 rounded p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <a
                href="mailto:zerotodev2026@gmail.com"
                className="text-primary underline hover:text-primary/80 transition"
            >
                zerotodev2026@gmail.com
            </a>
            </div>

            <div className="bg-card border border-white/10 rounded p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Social Media</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>
                <Link
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80 transition"
                >
                    Instagram
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </Container>
    );
}