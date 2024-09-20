import type { StateSchema } from '@/app/providers';

export const getArticlesData = (state: StateSchema) => state.articles?.articles ?? null;
