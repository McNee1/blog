import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from '../../config/i18n/i18nForTest';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  return <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>;
};
