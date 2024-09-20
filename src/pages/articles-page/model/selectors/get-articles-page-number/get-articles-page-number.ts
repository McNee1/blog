import type { StateSchema } from '@/app/providers';

export const getArticlesPageNumber = (state: StateSchema) => state.articles?.page ?? 1;
