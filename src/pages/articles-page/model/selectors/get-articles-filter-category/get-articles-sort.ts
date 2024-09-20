import type { StateSchema } from '@/app/providers';

export const getArticlesFilterCategory = (state: StateSchema) =>
  state.articles?.category ?? 'ALL';
