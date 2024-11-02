import type { StateSchema } from '@/app/providers';

export const getCommentListError = (state: StateSchema) =>
  state.commentsListForm?.error ?? null;
