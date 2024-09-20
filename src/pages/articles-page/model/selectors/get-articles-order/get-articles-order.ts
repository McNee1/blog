import type { StateSchema } from '@/app/providers';

export const getArticlesOrder = (state: StateSchema) => state.articles?.order ?? 'asc';
