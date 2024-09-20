import type { Role } from '@/entities';

export const isAccessToPage = (roles: Role[] | undefined, userRole: Role | null) => {
  if (!roles?.length || !userRole) {
    return false;
  }
  return roles.includes(userRole);
};
