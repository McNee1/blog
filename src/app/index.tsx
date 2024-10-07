import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Preloader } from '@/shared/ui';

import { StoreProvider, ThemeProvider, useRouter } from './providers';

export const Provider = () => {
  const router = useRouter();

  return (
    // <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <Suspense fallback={<Preloader height='full' />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
    // </React.StrictMode>
  );
};
