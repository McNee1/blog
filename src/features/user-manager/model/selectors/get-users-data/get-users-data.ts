import type { StateSchema } from '@/app/providers';

export const getUsersData = (state: StateSchema) =>
  state.users?.data?.filter((user) => !user.isDeleted) ?? null;
