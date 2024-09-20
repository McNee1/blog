import type { StateSchema } from '@/app/providers';

export const getUserRole = (state: StateSchema) => state.user.authData?.role ?? null;
