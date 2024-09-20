import type { StateSchema } from '@/app/providers';

export const getCommentFormIsLoading = (state: StateSchema) =>
  state.articleCommentForm?.isLoading ?? false;
