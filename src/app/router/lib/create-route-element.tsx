import { ReactElement } from 'react';

import { Role } from '@/entities';

import { ErrorBoundary, PrivateRoute } from '../ui';

export const createRouteElement = (
  element: ReactElement,
  requiresAuth = false,
  requiredRole?: Role[]
) => (
  <ErrorBoundary>
    {requiresAuth ? (
      <PrivateRoute requireRole={requiredRole}>{element}</PrivateRoute>
    ) : (
      element
    )}
  </ErrorBoundary>
);
