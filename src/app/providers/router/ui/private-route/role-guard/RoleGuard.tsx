import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { isAccessToPage, RoutePath, useAppSelector } from '@/shared/lib';

import { getUserRole, Role } from '@/entities';

interface RoleGuardProps {
  children: ReactNode;
  requiredRole: Role[];
}

export const RoleGuard = ({ children, requiredRole }: RoleGuardProps) => {
  const [isAllowed, setIsAllowed] = useState(true);

  const userRole = useAppSelector(getUserRole);

  const navigate = useNavigate();

  const isAllowedAccess = isAccessToPage(requiredRole, userRole);

  useEffect(() => {
    if (userRole && isAllowedAccess) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }

    if (!isAllowed) {
      return navigate(RoutePath.getMainPath());
    }
  }, [userRole, navigate, requiredRole, isAllowedAccess, isAllowed]);

  return children;
};
