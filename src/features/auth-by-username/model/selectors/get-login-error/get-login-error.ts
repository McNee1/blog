import type { StateSchema } from '@/app/providers';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error ?? null;
