import type { StateSchema } from '@/app/providers';

export const getArticlesSearch = (state: StateSchema) => state.articles?.search ?? '';
