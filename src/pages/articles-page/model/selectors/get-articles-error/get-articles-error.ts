import type { StateSchema } from '@/app/providers';

export const getArticlesError = (state: StateSchema) => state.articles?.error ?? null;
