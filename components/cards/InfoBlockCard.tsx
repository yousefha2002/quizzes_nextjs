interface InfoBlockProps {
    title: string;
    children: React.ReactNode;
}

export default function InfoBlockCard({ title, children }: InfoBlockProps) {
    return (
        <section>
        <h2 className="text-white font-semibold text-lg mb-2">{title}</h2>
        <p>{children}</p>
        </section>
    );
}