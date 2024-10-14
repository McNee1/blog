import { Theme } from '@/shared/constants';

export interface User {
  avatar?: string;
  email?: string;
  id: string;
  isDeleted?: boolean;
  jsonSetting: JsonSetting;
  role?: Role;
  username?: string;
}
export interface UserSchema {
  authData?: User | null;
  error: string | null;
  isLoading: boolean;
}

export type Role = 'admin' | 'user' | 'moderator';

export interface JsonSetting {
  theme: Theme;
}
