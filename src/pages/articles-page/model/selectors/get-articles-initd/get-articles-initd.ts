import type { StateSchema } from '@/app/providers';

export const getArticlesInitd = (state: StateSchema) => state.articles?._initd ?? false;
