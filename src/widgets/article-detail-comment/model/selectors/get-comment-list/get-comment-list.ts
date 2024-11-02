import type { StateSchema } from '@/app/providers';

export const getCommentList = (state: StateSchema) =>
  state.commentsListForm?.comments ?? null;
