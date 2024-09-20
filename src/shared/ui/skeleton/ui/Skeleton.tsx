import { CSSProperties, memo } from 'react';

import style from './Skeleton.module.scss';

import { classNames } from '@/shared/lib';

interface SkeletonProps {
  border?: string;
  className?: string;
  height?: string | number;
  margin?: string;
  otherStyle?: CSSProperties;
  width?: string | number;
}

export const Skeleton = memo(function Skeleton({
  className,
  height,
  width,
  border,
  margin,
  otherStyle,
}: SkeletonProps) {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
    margin,
    ...otherStyle,
  };

  return (
    <div
      className={classNames(style.skeleton, className)}
      style={styles}
    ></div>
  );
});
