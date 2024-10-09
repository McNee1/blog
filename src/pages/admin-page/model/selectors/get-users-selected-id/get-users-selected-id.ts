import type { StateSchema } from '@/app/providers';

export const getUsersSelectedId = (state: StateSchema) =>
  state.users?.selectedUserId ?? null;
