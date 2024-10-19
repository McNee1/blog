import type { StateSchema } from '@/app/providers';

export const getArticleDetailError = (state: StateSchema) =>
  state.articleDetail?.error ?? null;
