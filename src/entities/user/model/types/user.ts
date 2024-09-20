export interface User {
  avatar?: string;
  email?: string;
  id: string;
  isDeleted?: boolean;
  role?: Role;
  username?: string;
}
export interface UserSchema {
  authData?: User | null;
}

export type Role = 'admin' | 'user' | 'moderator';
