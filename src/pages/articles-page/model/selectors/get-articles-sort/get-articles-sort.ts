import type { StateSchema } from '@/app/providers';

export const getArticlesSort = (state: StateSchema) =>
  state.articles?.sort ?? 'createdAt';
