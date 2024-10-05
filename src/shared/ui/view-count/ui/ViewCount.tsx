import { memo } from 'react';

import styles from './ViewCount.module.scss';

import eye from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib';

import { AppIcon } from '../../app-icon';

interface ViewCountProps {
  className?: string;
  views: string | number;
}

export const ViewCount = memo(function ViewCount({ views, className }: ViewCountProps) {
  return (
    <div className={classNames(styles.ViewCount, className)}>
      <AppIcon
        className={styles.eye}
        width='20px'
        src={eye}
      />
      <span>{views}</span>
    </div>
  );
});
