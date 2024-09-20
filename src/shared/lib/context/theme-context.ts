import { createContext } from 'react';

import { Theme } from '../../constants';

export interface ThemeContextProps {
  setTheme?: (theme: Theme) => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT });
