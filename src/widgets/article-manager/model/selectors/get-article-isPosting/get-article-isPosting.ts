import type { StateSchema } from '@/app/providers';

export const getArticleIsPosting = (state: StateSchema) =>
  state.articleManager?.isPosting ?? false;
