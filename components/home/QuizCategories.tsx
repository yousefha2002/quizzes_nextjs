import { getCategories } from '@/lib/categories';
import QuizCategoryCard from '../cards/QuizCategoryCard';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import CardGrid from '../cards/CardGrid';
import ButtonLink from '../ui/PrimaryButton';

export default async function QuizCategories() {
    const {categories} = await getCategories();
    if (!categories.length) return null;
    return (
        <Container>
            <SectionTitle>Explore Categories</SectionTitle>
            <CardGrid
                items={categories.slice(0, 6)}
                className="mb-8"
                renderItem={(category) => (
                <QuizCategoryCard key={category.id} title={category.title} />
                )}
            />
            <div className="text-center">
                <ButtonLink href="/categories">Start Quizzing Now</ButtonLink>
            </div>
        </Container>
    );
}
