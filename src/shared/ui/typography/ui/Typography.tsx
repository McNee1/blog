import { memo } from 'react';

import style from './Typography.module.scss';

import { classNames } from '@/shared/lib';

type Weight = 'bold' | 'boldest' | 'bolder' | 'normal' | 'lighter';
type Size = 'sm' | 'md' | 'lg';

interface TypographyProps {
  align?: 'center' | 'right' | 'left';
  text?: string;
  textClass?: string;
  textSize?: Size;
  textWeight?: Weight;
  theme?: 'error' | 'primary';
  title?: string;
  titleClass?: string;
  titleLevel?: 'h1' | 'h2' | 'h3';
  titleSize?: 'md' | 'lg' | 'xl';
  titleWeight?: Weight;
}

const TypographyComponent = ({
  title,
  text,
  theme = 'primary',
  titleLevel = 'h1',
  align,
  titleWeight,
  textWeight,
  textSize = 'sm',
  titleSize,
  textClass,
  titleClass,
}: TypographyProps) => {
  const TitleContent = titleLevel === 'h1' ? 'h1' : titleLevel === 'h2' ? 'h2' : 'h3';

  return (
    <>
      {title && (
        <TitleContent
          className={classNames(
            style[theme],
            titleWeight && style[titleWeight],
            align && style[align],
            style[titleLevel],
            titleSize && style[titleSize],
            style.title,
            titleClass
          )}
        >
          {title}
        </TitleContent>
      )}
      {text && (
        <p
          className={classNames(
            style[theme],
            style[textSize],
            align && style[align],
            textWeight && style[textWeight],
            style.text,
            textClass
          )}
        >
          {text}
        </p>
      )}
    </>
  );
};

export const Typography = memo(TypographyComponent);
