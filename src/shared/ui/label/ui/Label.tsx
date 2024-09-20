import { memo } from 'react';

import styles from './Label.module.scss';

import { classNames } from '@/shared/lib';

interface LabelProps {
  className?: string;
  id?: string;
  label: string;
}

export const Label = memo(function Label({ id, className, label }: LabelProps) {
  return (
    <label
      className={classNames(styles.label, className)}
      htmlFor={id}
    >
      {label}
    </label>
  );
});
