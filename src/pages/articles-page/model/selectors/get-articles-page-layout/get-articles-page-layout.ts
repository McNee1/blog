import type { StateSchema } from '@/app/providers';

export const getArticlesLayout = (state: StateSchema) =>
  state.articles?.layoutType ?? 'card';
