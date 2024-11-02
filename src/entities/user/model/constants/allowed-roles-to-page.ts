import { PATCH_NAMEKey } from '@/shared/types';

import { Role } from '../types';
import { userRole } from './user-role';

export const allowedRolesForPage: Partial<Record<PATCH_NAMEKey, Role[]>> = {
  ADMIN: [userRole.ADMIN, userRole.MODERATOR],
} as const;
