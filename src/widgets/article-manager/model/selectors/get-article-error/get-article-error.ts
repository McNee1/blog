import type { StateSchema } from '@/app/providers';

export const getArticleError = (state: StateSchema) =>
  state.articleManager?.error ?? null;
