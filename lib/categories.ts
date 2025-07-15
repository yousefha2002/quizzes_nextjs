import { Category } from "@/types/entities/Categroy";
import { apiGet } from "@/utils/api/apiGet";

export async function getCategories(page = 1,limit = 6,name?: string) {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
    });
    if (name) {
        params.append("name", name);
    }
    return apiGet<{ categories: Category[]; totalPages: number }>(
        `category/all?${params.toString()}`
    );
}