import { StateSchema } from '@/app/providers';

export const getUserArticlesError = (state: StateSchema) =>
  state.userArticles?.error ?? null;
