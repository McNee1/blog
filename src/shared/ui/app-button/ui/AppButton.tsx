import { ButtonHTMLAttributes, memo } from 'react';

import styles from './AppButton.module.scss';

import { classNames } from '@/shared/lib';
import { TestProps } from '@/shared/types';

type Variant =
  | 'green'
  | 'blue'
  | 'red'
  | 'gray'
  | 'black'
  | 'outline-blue'
  | 'outline-green'
  | 'outline-red'
  | 'outline-gray'
  | 'outline-black';

type Size = 'sm' | 'md' | 'lg';
type Round = 'sm' | 'md' | 'lg' | 'full';

const sizeClass: Record<Size, string> = {
  sm: styles['size-sm'],
  md: styles['size-md'],
  lg: styles['size-lg'],
};

const roundClass: Record<Round, string> = {
  sm: styles['round-sm'],
  md: styles['round-md'],
  lg: styles['round-lg'],
  full: styles['round-full'],
};

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, TestProps {
  bgColor?: string;
  className?: string;
  round?: Round;
  size?: Size;
  variant?: Variant;
}

export const AppButton = memo(function AppButton({
  variant,
  children,
  className,
  round,
  bgColor,
  size,
  dataTestId,
  ...otherProps
}: AppButtonProps) {
  const classes = [
    round && roundClass[round],
    size && sizeClass[size],
    variant && styles[variant],
  ];

  return (
    <button
      className={classNames(styles.btn, ...classes, className)}
      style={{ backgroundColor: bgColor }}
      data-testid={dataTestId}
      {...otherProps}
    >
      {children}
    </button>
  );
});
