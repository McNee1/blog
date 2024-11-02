import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Preloader } from '@/shared/ui';

import { fetchUser, getUserIsLoading } from '@/entities';

import { withTheme } from './providers';
import { useRouter } from './router';

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getUserIsLoading);

  const router = useRouter();

  useEffect(() => {
    void dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader height='full' />;
  }

  return <RouterProvider router={router} />;
};

export const ThemedApp = withTheme(App);
