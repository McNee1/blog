import { Role } from '../types';

export const userRole: Record<Uppercase<Role>, Role> = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
} as const;
