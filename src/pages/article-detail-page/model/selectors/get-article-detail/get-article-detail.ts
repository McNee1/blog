import type { StateSchema } from '@/app/providers';

export const getArticleDetail = (state: StateSchema) => state.articleDetail?.data ?? null;
