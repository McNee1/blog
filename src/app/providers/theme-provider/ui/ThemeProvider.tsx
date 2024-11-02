import { ReactNode, useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/constants';
import { ThemeContext } from '@/shared/lib';

interface ThemeProviderProps {
  children: ReactNode;
  initTheme?: Theme;
}
const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider = ({ children, initTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initTheme ?? fallbackTheme ?? Theme.LIGHT);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    if (initTheme) {
      setTheme(initTheme);
    }
  }, [initTheme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
