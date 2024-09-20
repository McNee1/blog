import SVG from 'react-inlinesvg';

import styles from './ThemeSwitcher.module.scss';

import moonIcon from '@/shared/assets/icons/moon.svg';
import sunIcon from '@/shared/assets/icons/sun.svg';
import { Theme } from '@/shared/constants';
import { useTheme } from '@/shared/lib';
import { AppButton } from '@/shared/ui';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      className={styles.button}
      // theme={ThemeButton}

      onClick={toggleTheme}
    >
      {theme == Theme.DARK ? (
        <SVG
          src={moonIcon}
          height='20px'
          width='20px'
        />
      ) : (
        <SVG
          src={sunIcon}
          height='20px'
          width='20px'
        />
      )}
    </AppButton>
  );
};
