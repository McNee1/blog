import { ComponentProps, memo } from 'react';

import cls from './Typography.module.scss';

import { classNames } from '@/shared/lib';

import { Space } from '../../space';

type Weight = 'bold' | 'boldest' | 'bolder' | 'normal' | 'lighter';
type Size = 'sm' | 'md' | 'lg' | 'xl';
type BasicTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
type Variant = 'error' | 'primary' | 'secondary';

type SpaceProps = ComponentProps<typeof Space>;

interface TypographyProps {
  align?: 'center' | 'right' | 'left';
  as?: BasicTags;
  className?: string;
  content?: string | null;
  size?: Size;
  space?: SpaceProps;
  variant?: Variant;
  weight?: Weight;
}

const weightClass: Record<Weight, string> = {
  normal: cls.normal,
  bold: cls.bold,
  bolder: cls.bolder,
  boldest: cls.boldest,
  lighter: cls.lighter,
};

const sizeClass: Record<Size, string> = {
  lg: cls.lg,
  md: cls.md,
  xl: cls.xl,
  sm: cls.sm,
};

const variantClass: Record<Variant, string> = {
  error: cls.error,
  primary: cls.primary,
  secondary: cls.secondary,
};
// add 14px size
export const Typography = memo(function Typography({
  as = 'p',
  align,
  size = 'sm',
  weight = 'normal',
  content,
  className,
  variant = 'secondary',
  space,
}: TypographyProps) {
  const Component = as;

  const spaceClasses = Space({ ...space });

  const classes = [
    align && cls[align],
    size && sizeClass[size],
    weight && weightClass[weight],
    variant && variantClass[variant],
    ...spaceClasses,
  ];

  return (
    <>
      {content && (
        <Component className={classNames(...classes, className)}>{content}</Component>
      )}
    </>
  );
});
