import { ComponentProps, ReactNode } from 'react';

import styles from './Card.module.scss';

import { classNames } from '@/shared/lib';
import { TestProps } from '@/shared/types';

import { FlexClass } from '../../flex-box';
import { Space } from '../../space';

type SpaceType = ComponentProps<typeof Space>;
type FlexType = ComponentProps<typeof FlexClass>;

interface CardProps extends TestProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  flex?: FlexType;
  overflow?: 'visible' | 'hidden';
  shadow?: boolean;
  space?: SpaceType;
}
export const Card = ({
  children,
  className,
  overflow = 'hidden',
  as: Tag = 'div',
  shadow = true,
  dataTestId,
  flex,
  space,
}: CardProps) => {
  const flexClass = FlexClass({ ...flex });
  const spaceClass = Space({ paddingY: 'py8', paddingX: 'px10', ...space });

  return (
    <Tag
      className={classNames(
        styles.card,
        ...flexClass,
        styles[overflow],
        shadow && styles.shadow,
        ...spaceClass,
        className
      )}
      data-testid={dataTestId}
    >
      {children}
    </Tag>
  );
};
