import { Level, LevelProgressData } from '@/types/entities/Level';
import { apiGet } from '@/utils/api/apiGet';

export async function getLevelsForVisitor(title:string) {
    return apiGet<Level[]>(`level/all/public/byCategory/${title}`);
}

export async function getLevelsForUser(title:string,token:string|undefined) {
    return apiGet<Level[]>(`level/all/byCategory/${title}`,token);
}

export async function getStatrtedUserLevels(page:number,limit:number,token:string|undefined) {
    return apiGet<{progresses:LevelProgressData[],totalPages:number}>(`level-progress/byUser?page=${page}&limit=${limit}`,token);
}