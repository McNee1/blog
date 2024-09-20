import type { StateSchema } from '@/app/providers';

export const getArticlesByClick = (state: StateSchema) =>
  state.articles?.isGetMoreByClick ?? false;
