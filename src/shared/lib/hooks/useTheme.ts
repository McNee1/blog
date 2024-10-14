import { useContext } from 'react';

import { Theme } from '@/shared/constants';

import { ThemeContext } from '../context';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: (fn?: (theme: Theme) => void) => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (fn?: (theme: Theme) => void) => {
    if (setTheme) {
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

      setTheme(newTheme);

      fn?.(newTheme);
    }
  };

  return {
    theme,
    toggleTheme,
  };
};
