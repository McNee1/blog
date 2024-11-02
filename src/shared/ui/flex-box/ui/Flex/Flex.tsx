import { ComponentProps, ReactNode } from 'react';

import styles from './Flex.module.scss';

import { classNames } from '@/shared/lib';
import { TestProps } from '@/shared/types';
import { Space } from '@/shared/ui';

import { FlexClass, FlexClassProps } from '../FlexClass';

type SpaceType = ComponentProps<typeof Space>;

export interface FlexProps extends FlexClassProps, TestProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  maxHeight?: boolean;
  maxWidth?: boolean;
  space?: SpaceType;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    maxWidth,

    maxHeight,
    as: Tag = 'div',
    dataTestId,
    alignItems,
    direction,
    gap,
    justify,
    space,
    wrap,
  } = props;

  const spaceClasses = Space({ ...space });

  const flexClasses = FlexClass({ alignItems, direction, gap, justify, wrap });

  return (
    <Tag
      className={classNames(
        ...flexClasses,
        maxWidth && styles.maxWidth,
        maxHeight && styles.maxHeight,
        ...spaceClasses,
        className
      )}
      data-testid={dataTestId}
    >
      {children}
    </Tag>
  );
};
