import type { StateSchema } from '@/app/providers';

export const getArticleDetailCommentsIsLoading = (state: StateSchema) =>
  state.commentsList?.isLoading ?? false;
