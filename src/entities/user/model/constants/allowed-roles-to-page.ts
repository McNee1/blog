import { PathNameKey } from '@/shared/types';

import { Role } from '../types';
import { userRole } from './user-role';

export const allowedRolesForPage: Partial<Record<PathNameKey, Role[]>> = {
  USERS_PAGE: [userRole.ADMIN, userRole.MODERATOR],
} as const;
