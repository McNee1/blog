import type { StateSchema } from '@/app/providers';

export const getLoginEmail = (state: StateSchema) => state?.loginForm?.email ?? '';
