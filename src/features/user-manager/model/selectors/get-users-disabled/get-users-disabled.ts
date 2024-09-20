import type { StateSchema } from '@/app/providers';

export const getUsersDisabled = (state: StateSchema) => state.users?.disabled ?? false;
