import type { StateSchema } from '@/app/providers';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articles?.isLoading ?? false;
