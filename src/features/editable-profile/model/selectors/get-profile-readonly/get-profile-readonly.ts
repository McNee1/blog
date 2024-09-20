import type { StateSchema } from '@/app/providers';

export const getProfilerReadonly = (state: StateSchema) =>
  state.profile?.readonly ?? false;
