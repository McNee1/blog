import { memo } from 'react';

import styles from './DateView.module.scss';

import calendar from '@/shared/assets/icons/calendar.svg';
import { classNames, formatDate } from '@/shared/lib';

import { AppIcon } from '../../app-icon';

interface DateViewProps {
  className?: string;
  date?: string | Date | number;
  options: Intl.DateTimeFormatOptions;
}

export const DateView = memo(function DateView({
  date,
  className,
  options,
}: DateViewProps) {
  const formattedDate = formatDate(date, options);
  return (
    <div className={classNames(styles.date, className)}>
      <AppIcon
        className={styles.calendar}
        src={calendar}
        height='20px'
        width='20px'
      />
      <time>{formattedDate}</time>
    </div>
  );
});
