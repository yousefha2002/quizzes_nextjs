import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutPage() {
    return (
        <Container className="py-16 bg-background min-h-screen text-textBase">
            <SectionTitle>About Us</SectionTitle>

            <p className="mb-10 max-w-3xl leading-relaxed text-muted">
                We are a passionate team of developers, including <strong>Yousef</strong> and <strong>Mohamed</strong>, dedicated to helping programmers of all levels enhance their skills.
                Our platform provides interactive quizzes and challenges that enable learners and experienced developers alike to test their knowledge, identify weak points, and improve.
            </p>

            <section className="mb-12 max-w-3xl">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
                <p className="leading-relaxed text-muted">
                To empower programmers by offering a reliable and engaging space where they can practice coding concepts, track their progress, and gain certificates that recognize their achievements.
                </p>
            </section>

        <section className="mb-12 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
            <p className="leading-relaxed text-muted">
            We envision a world where every developer has access to quality learning resources and meaningful assessment tools that foster continuous growth and confidence in programming.
            </p>
        </section>

            <section className="max-w-3xl">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Meet the Team</h2>
                <div className="space-y-6 text-muted">
                    <div className="bg-card p-6 rounded shadow-md">
                    <h3 className="text-lg font-semibold text-textBase mb-2">Yousef Abohani</h3>
                    <p className="leading-relaxed">
                        Full Stack Web Developer, passionate about building complete web solutions with both frontend and backend expertise.
                    </p>
                    </div>
                    <div className="bg-card p-6 rounded shadow-md">
                    <h3 className="text-lg font-semibold text-textBase mb-2">Mohammed Abohani</h3>
                    <p className="leading-relaxed">
                        Full Stack Web Developer, focused on delivering scalable APIs and seamless user experiences.
                    </p>
                    </div>
                </div>
            </section>
        </Container>
    );
}