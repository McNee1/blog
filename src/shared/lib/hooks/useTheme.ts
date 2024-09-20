import { useContext, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/constants';

import { ThemeContext } from '../context';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (setTheme) {
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

      setTheme(newTheme);

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
  };

  useEffect(() => {
    document.body.classList.remove(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    document.body.classList.add(theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
