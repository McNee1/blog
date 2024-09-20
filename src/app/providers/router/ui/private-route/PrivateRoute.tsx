import { ReactNode } from 'react';

import { Role } from '@/entities';

import { AuthGuard } from './auth-guard';
import { RoleGuard } from './role-guard';

interface PrivateRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
  requireRole?: Role[];
}
export const PrivateRoute = ({
  children,
  requireAuth = true,
  requireRole,
}: PrivateRouteProps) => {
  if (requireRole?.length && requireAuth) {
    return (
      <AuthGuard>
        <RoleGuard requiredRole={requireRole}>{children}</RoleGuard>
      </AuthGuard>
    );
  } else if (requireAuth) {
    return <AuthGuard>{children}</AuthGuard>;
  } else if (requireRole?.length) {
    return <RoleGuard requiredRole={requireRole}>{children}</RoleGuard>;
  }
};
