import type { StateSchema } from '@/app/providers';

export const getUserIsLoading = (state: StateSchema) => state.user.isLoading ?? false;
