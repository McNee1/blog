import { memo, useCallback } from 'react';

import styles from './ThemeSwitcher.module.scss';

import moonIcon from '@/shared/assets/icons/moon.svg';
import sunIcon from '@/shared/assets/icons/sun.svg';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/constants';
import { useAppDispatch, useDebounce, useTheme } from '@/shared/lib';
import { AppButton, AppIcon } from '@/shared/ui';

import { updateJsonSetting } from '@/entities';

export const ThemeSwitcher = memo(function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const debounceSetting = useDebounce(
    (newTheme: Theme) => void dispatch(updateJsonSetting({ theme: newTheme })),

    1000
  );

  const handleToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      debounceSetting(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    });
  }, [debounceSetting, toggleTheme]);

  return (
    <AppButton
      onClick={handleToggleTheme}
      className={styles.button}
    >
      {theme == Theme.DARK ? (
        <AppIcon
          src={moonIcon}
          height='20px'
          width='20px'
        />
      ) : (
        <AppIcon
          src={sunIcon}
          height='20px'
          width='20px'
        />
      )}
    </AppButton>
  );
});
