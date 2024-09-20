import type { StateSchema } from '@/app/providers';

export const getArticleIsLoading = (state: StateSchema) =>
  state.articleManager?.isLoading ?? false;
