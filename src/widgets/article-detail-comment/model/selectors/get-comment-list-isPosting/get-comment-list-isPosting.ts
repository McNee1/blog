import type { StateSchema } from '@/app/providers';

export const getCommentListIsPosting = (state: StateSchema) =>
  state.commentsListForm?.isPosting ?? false;
