import { ReactNode } from 'react';

import styles from './Badge.module.scss';

import { classNames } from '@/shared/lib';

type BadgeColor = 'primary' | 'success' | 'warning' | 'info';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  type: BadgeColor;
}
export const Badge = ({ children, type, className }: BadgeProps) => {
  return (
    <div className={classNames(styles.badge, styles[type], className)}>{children}</div>
  );
};
