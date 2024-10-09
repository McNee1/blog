import type { StateSchema } from '@/app/providers';

export const getUsersError = (state: StateSchema) => state.users?.error ?? null;
