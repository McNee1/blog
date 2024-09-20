import type { StateSchema } from '@/app/providers';

export const getArticleDetailIsLoading = (state: StateSchema) =>
  state.articleDetail?.isLoading ?? false;
