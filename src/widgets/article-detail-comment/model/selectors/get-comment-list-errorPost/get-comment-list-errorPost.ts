import type { StateSchema } from '@/app/providers';

export const getCommentListErrorPost = (state: StateSchema) =>
  state.commentsListForm?.errorPost ?? null;
