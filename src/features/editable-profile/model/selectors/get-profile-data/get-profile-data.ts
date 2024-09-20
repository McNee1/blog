import type { StateSchema } from '@/app/providers';

export const getProfileData = (state: StateSchema) => state.profile?.data ?? null;
