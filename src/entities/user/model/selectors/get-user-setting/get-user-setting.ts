import type { StateSchema } from '@/app/providers';

export const getUserSetting = (state: StateSchema) => state.user.authData?.jsonSetting;
