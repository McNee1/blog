import { StateSchema } from '@/app/providers';

export const getUserArticles = (state: StateSchema) => state.userArticles?.data ?? null;
