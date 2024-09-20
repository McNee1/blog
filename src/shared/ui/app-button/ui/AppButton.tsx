import { ButtonHTMLAttributes, memo } from 'react';

import styles from './AppButton.module.scss';

import { classNames } from '@/shared/lib';

export enum ThemeButton {
  GREEN = 'green',
  BLUE = 'blue',
  RED = 'red',
  GRAY = 'gray',
  BLACK = 'black',
  PURPLE = 'purple',

  OUTLINE_BLUE = 'outline-blue',
  OUTLINE_GREEN = 'outline-green',
  OUTLINE_RED = 'outline-red',
  OUTLINE_GRAY = 'outline-gray',
  OUTLINE_BLACK = 'outline-black',
  OUTLINE_PURPLE = 'outline-purple',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  className?: string;
  round?: 'sm' | 'md' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  theme?: ThemeButton | ThemeButton[];
}

export const AppButton = memo(function AppButton({
  theme,
  children,
  className,
  round,
  bgColor,
  size = 'md',
  ...otherProps
}: AppButtonProps) {
  return (
    <button
      className={classNames(
        styles.btn,
        styles[`round-${round}`],
        styles[`size-${size}`],
        theme && (Array.isArray(theme) ? theme.map((cls) => styles[cls]) : styles[theme]),
        className
      )}
      style={{ backgroundColor: bgColor }}
      {...otherProps}
    >
      {children}
    </button>
  );
});
