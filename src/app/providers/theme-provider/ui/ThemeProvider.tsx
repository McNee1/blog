import { ReactNode, useEffect, useMemo, useState } from 'react';

import { Theme } from '@/shared/constants';
import { ThemeContext, useAppSelector } from '@/shared/lib';

import { getUserSetting } from '@/entities';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const currTheme = useAppSelector(getUserSetting)?.theme;

  const [theme, setTheme] = useState<Theme>(currTheme ?? Theme.LIGHT);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    if (currTheme) {
      setTheme(currTheme);
    }
  }, [currTheme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
