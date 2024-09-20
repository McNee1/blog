import type { StateSchema } from '@/app/providers';

export const getCommentForm = (state: StateSchema) =>
  state?.articleCommentForm?.text ?? '';
