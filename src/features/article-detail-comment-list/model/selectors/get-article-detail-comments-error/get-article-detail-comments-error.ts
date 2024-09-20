import type { StateSchema } from '@/app/providers';

export const getArticleDetailCommentsError = (state: StateSchema) =>
  state.commentsList?.error ?? null;
