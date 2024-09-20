import type { StateSchema } from '@/app/providers';

export const getArticlesLimit = (state: StateSchema) => state.articles?.limit;
