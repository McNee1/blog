import { ReactNode } from 'react';

import styles from './FlexGroup.module.scss';

import { classNames } from '@/shared/lib';

type Numbers = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22;

type FlexDirection = 'row' | 'col';
type JustifyContent = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
type AlignItems = 'center' | 'start' | 'end';

type Gap = `gap${Numbers}`;

type SpaceButton = `space${Numbers}` | 'auto';
type SpaceLeft = `space${Numbers}` | 'auto';

type SpaceTop = 'auto';

const spaceButtonClasses: Record<SpaceButton, string> = {
  auto: styles.marginBottomAuto,
  space2: styles.marginBottom2,
  space4: styles.marginBottom4,
  space6: styles.marginBottom6,
  space8: styles.marginBottom8,
  space10: styles.marginBottom10,
  space12: styles.marginBottom12,
  space14: styles.marginBottom14,
  space16: styles.marginBottom16,
  space18: styles.marginBottom18,
  space20: styles.marginBottom20,
  space22: styles.marginBottom22,
};

const spaceLeftClasses: Record<SpaceLeft, string> = {
  auto: styles.marginLeftAuto,
  space8: styles.marginLeft8,
  space2: styles.marginLeft2,
  space4: styles.marginLeft4,
  space6: styles.marginLeft6,
  space10: styles.marginLeft10,
  space12: styles.marginLeft12,
  space14: styles.marginLeft14,
  space16: styles.marginLeft16,
  space18: styles.marginLeft18,
  space20: styles.marginLeft20,
  space22: styles.marginLeft22,
};

const spaceTopClasses: Record<SpaceTop, string> = {
  auto: styles.marginTopAuto,
};

const justifyClasses: Record<JustifyContent, string> = {
  start: styles.justifyStart,
  around: styles.justifyAround,
  between: styles.justifyBetween,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  evenly: styles.justifyEvenly,
};

const directionClasses: Record<FlexDirection, string> = {
  col: styles.flexColumn,
  row: styles.flexRow,
};

const alignClasses: Record<AlignItems, string> = {
  center: styles.alignCenter,
  end: styles.alignEnd,
  start: styles.alignStart,
};

const gapClasses: Record<Gap, string> = {
  gap2: styles.gap2,
  gap4: styles.gap4,
  gap6: styles.gap6,
  gap8: styles.gap8,
  gap10: styles.gap10,
  gap12: styles.gap12,
  gap14: styles.gap14,
  gap16: styles.gap16,
  gap18: styles.gap18,
  gap20: styles.gap20,
  gap22: styles.gap22,
};

interface FlexGroupProps {
  alignItems?: AlignItems;
  children: ReactNode;
  className?: string;
  direction?: FlexDirection;
  gap?: Gap;
  justify?: JustifyContent;
  maxHeight?: boolean;
  maxWidth?: boolean;
  spaceButton?: SpaceButton;
  spaceLeft?: SpaceLeft;
  spaceTop?: SpaceTop;
  tagName?: keyof JSX.IntrinsicElements;
  wrap?: boolean;
}

export const FlexGroup = (props: FlexGroupProps) => {
  const {
    alignItems,
    justify,
    direction,
    gap,
    className,
    children,
    wrap,
    maxWidth,
    spaceButton,
    spaceTop,
    maxHeight,
    spaceLeft,
    tagName: Tag = 'div',
  } = props;
  const flexClasses = [
    justify && justifyClasses[justify],
    direction && directionClasses[direction],
    alignItems && alignClasses[alignItems],
    gap && gapClasses[gap],
    wrap && styles.wrap,
  ];

  const spaceClasses = [
    spaceButton && spaceButtonClasses[spaceButton],
    spaceTop && spaceTopClasses[spaceTop],
    spaceLeft && spaceLeftClasses[spaceLeft],
  ];

  return (
    <Tag
      className={classNames(
        styles.flex,
        maxWidth && styles.maxWidth,
        maxHeight && styles.maxHeight,
        ...flexClasses,
        ...spaceClasses,
        className
      )}
    >
      {children}
    </Tag>
  );
};
