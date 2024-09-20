import type { StateSchema } from '@/app/providers';

export const getProfileDataFrom = (state: StateSchema) => state.profile?.dataForm ?? null;
