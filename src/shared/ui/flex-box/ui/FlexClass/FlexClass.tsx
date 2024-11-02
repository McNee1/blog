import cls from './FlexClass.module.scss';

type Numbers = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22;

type FlexDirection = 'row' | 'col';
type JustifyContent = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
type AlignItems = 'center' | 'start' | 'end';

type Gap = `gap${Numbers}`;

const justifyClasses: Record<JustifyContent, string> = {
  start: cls.justifyStart,
  around: cls.justifyAround,
  between: cls.justifyBetween,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  evenly: cls.justifyEvenly,
};

const directionClasses: Record<FlexDirection, string> = {
  col: cls.flexColumn,
  row: cls.flexRow,
};

const alignClasses: Record<AlignItems, string> = {
  center: cls.alignCenter,
  end: cls.alignEnd,
  start: cls.alignStart,
};

const gapClasses: Record<Gap, string> = {
  gap2: cls.gap2,
  gap4: cls.gap4,
  gap6: cls.gap6,
  gap8: cls.gap8,
  gap10: cls.gap10,
  gap12: cls.gap12,
  gap14: cls.gap14,
  gap16: cls.gap16,
  gap18: cls.gap18,
  gap20: cls.gap20,
  gap22: cls.gap22,
};

export interface FlexClassProps {
  alignItems?: AlignItems;
  direction?: FlexDirection;
  gap?: Gap;
  justify?: JustifyContent;
  wrap?: boolean;
}

export const FlexClass = ({
  alignItems,
  direction,
  gap,
  justify,
  wrap,
}: FlexClassProps) => {
  const classes = [
    justify && justifyClasses[justify],
    direction && directionClasses[direction],
    alignItems && alignClasses[alignItems],
    gap && gapClasses[gap],
    wrap && cls.wrap,
  ]
    .filter(Boolean)
    .join(' ');

  const flex = !!classes.length && cls.flex;

  return [flex, classes];
};
