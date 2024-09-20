import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StoreProvider, StoreProviderProps, ThemeProvider } from '@/app/providers';

import { render } from '@testing-library/react';

import i18nForTests from '../../config/i18n/i18nForTest';

export type AllTheProvidersProps = Omit<StoreProviderProps, 'children'>;

export const AllTheProviders = (
  children: ReactNode,
  storeOption: AllTheProvidersProps
) => {
  return render(
    <MemoryRouter>
      <StoreProvider
        asyncReducers={storeOption.asyncReducers}
        initialState={storeOption.initialState}
      >
        <ThemeProvider>
          <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
