import type { StateSchema } from '@/app/providers';

export const getCommentListIsLoading = (state: StateSchema) =>
  state.commentsListForm?.isLoading ?? false;
