import Container from "../ui/Container";

export default function CategoriesSkeleton() {
    return (
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
            <div
            key={i}
            className="h-40 rounded-xl bg-card animate-pulse border border-white/10"
            />
        ))}
        </Container>
    );
}
