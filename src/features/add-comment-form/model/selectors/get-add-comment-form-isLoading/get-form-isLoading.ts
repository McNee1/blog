import type { StateSchema } from '@/app/providers';

export const getCommentFormIsLoading = (state: StateSchema) =>
  state.addCommentForm?.isLoading ?? false;
