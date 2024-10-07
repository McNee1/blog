import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider, StoreProviderProps, ThemeProvider } from '@/app/providers';

import { render } from '@testing-library/react';

import { I18nProvider } from './i18nProvider';

export type AllTheProvidersProps = Omit<StoreProviderProps, 'children'>;

export const AllTheProviders = (
  children: ReactNode,
  storeOption: AllTheProvidersProps
) => {
  return render(
    <BrowserRouter>
      <StoreProvider
        asyncReducers={storeOption.asyncReducers}
        initialState={storeOption.initialState}
      >
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};
