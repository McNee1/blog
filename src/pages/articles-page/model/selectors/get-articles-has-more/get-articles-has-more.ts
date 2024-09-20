import type { StateSchema } from '@/app/providers';

export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore ?? true;
