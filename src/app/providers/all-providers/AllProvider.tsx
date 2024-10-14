import { ReactNode, Suspense } from 'react';

import { Preloader } from '@/shared/ui';

import { StoreProvider } from '../store-provider';
import { ThemeProvider } from '../theme-provider';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
    // <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <Suspense fallback={<Preloader height='full' />}>{children}</Suspense>
      </ThemeProvider>
    </StoreProvider>
    // </React.StrictMode>
  );
};
