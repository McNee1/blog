import type { StateSchema } from '@/app/providers';

export const getUsersPrevRole = (state: StateSchema) => state.users?.prevUserRole ?? null;
