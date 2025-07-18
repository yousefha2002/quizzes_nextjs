import HeroSection from "@/components/home/HeroSection";
import PointsSystem from "@/components/home/PointsSystem";
import QuizCategories from "@/components/home/QuizCategories";
import CategoriesSkeleton from "@/components/skeletons/CategoriesSkeleton";
import { Suspense } from "react";

export default async function page() {
    return (
        <section>
            <HeroSection/>
            <Suspense fallback={<CategoriesSkeleton />}>
                <QuizCategories />
            </Suspense>
            <PointsSystem/>
        </section>
    );
}