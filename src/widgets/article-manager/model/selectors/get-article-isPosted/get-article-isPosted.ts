import type { StateSchema } from '@/app/providers';

export const getArticleIsPosted = (state: StateSchema) =>
  state.articleManager?.isPostedArticle ?? false;
