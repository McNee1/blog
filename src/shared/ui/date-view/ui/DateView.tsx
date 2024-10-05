import { memo } from 'react';

import styles from './DateView.module.scss';

import calendar from '@/shared/assets/icons/calendar.svg';
import { classNames } from '@/shared/lib';

import { AppIcon } from '../../app-icon';

interface DateViewProps {
  className?: string;
  date: string | number;
}

export const DateView = memo(function DateView({ date, className }: DateViewProps) {
  return (
    <div className={classNames(styles.date, className)}>
      <AppIcon
        className={styles.calendar}
        src={calendar}
        height='20px'
        width='20px'
      />
      <time>{date}</time>
    </div>
  );
});
