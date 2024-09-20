import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePath, useAppSelector } from '@/shared/lib';

import { getUserData } from '@/entities';

interface PrivateRoute {
  children: ReactNode;
}

export const AuthGuard = ({ children }: PrivateRoute) => {
  const [isAllowed, setIsAllowed] = useState(true);

  const authData = useAppSelector(getUserData);

  const navigate = useNavigate();

  useEffect(() => {
    if (authData?.username) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }

    if (!isAllowed) {
      return navigate(RoutePath.getMainPath());
    }
  }, [authData?.username, isAllowed, navigate]);

  return children;
};
