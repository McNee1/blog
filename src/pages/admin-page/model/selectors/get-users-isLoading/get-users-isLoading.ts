import type { StateSchema } from '@/app/providers';

export const getUsersIsLoading = (state: StateSchema) => state.users?.isLoading ?? false;
