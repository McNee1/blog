import type { StateSchema } from '@/app/providers';

export const getCommentFormError = (state: StateSchema) =>
  state.addCommentForm?.error ?? null;
