import type { StateSchema } from '@/app/providers';

export const getArticleDetailReaction = (state: StateSchema) =>
  state.articleDetail?.data?.reaction ?? 0;
