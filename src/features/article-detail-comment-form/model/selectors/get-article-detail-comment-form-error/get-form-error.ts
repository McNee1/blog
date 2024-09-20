import type { StateSchema } from '@/app/providers';

export const getCommentFormError = (state: StateSchema) =>
  state.articleCommentForm?.error ?? null;
