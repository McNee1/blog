import { StateSchema } from '@/app/providers';

export const getUserArticlesIsLoading = (state: StateSchema) =>
  state.userArticles?.isLoading ?? false;
