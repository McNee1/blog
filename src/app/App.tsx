import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { classNames, useAppDispatch, useAppSelector, useTheme } from '@/shared/lib';
import { Preloader } from '@/shared/ui';

import { fetchUser, getUserIsLoading } from '@/entities';

import { routerConfig } from './router';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getUserIsLoading);

  const router = createBrowserRouter(routerConfig);

  useEffect(() => {
    void dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader height='full' />;
  }

  return (
    <div className={classNames('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};
