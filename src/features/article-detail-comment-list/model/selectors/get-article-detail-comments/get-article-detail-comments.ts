import type { StateSchema } from '@/app/providers';

export const getArticleDetailComments = (state: StateSchema) =>
  state.commentsList?.entities ?? null;
