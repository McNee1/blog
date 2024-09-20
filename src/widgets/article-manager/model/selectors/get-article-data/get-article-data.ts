import type { StateSchema } from '@/app/providers';

export const getArticleData = (state: StateSchema) =>
  state.articleManager?.article ?? null;
