import type { StateSchema } from '@/app/providers';

export const getArticleDetailIsDeleted = (state: StateSchema) =>
  state.articleDetail?.isDeleted ?? false;
