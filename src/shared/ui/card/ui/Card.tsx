import { ReactNode } from 'react';

import styles from './Card.module.scss';

import { classNames } from '@/shared/lib';

interface CardProps {
  children: ReactNode;
  className?: string;
  overflow?: 'visible' | 'hidden';
  padding?: boolean;
  shadow?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
}
export const Card = ({
  children,
  className,
  overflow = 'hidden',
  tagName: Tag = 'div',
  padding = true,
  shadow = true,
}: CardProps) => {
  return (
    <Tag
      className={classNames(
        styles.card,
        styles[overflow],
        padding && styles.padding,
        shadow && styles.shadow,
        className
      )}
    >
      {children}
    </Tag>
  );
};
