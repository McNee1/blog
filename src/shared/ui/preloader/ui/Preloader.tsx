import styles from './Preloader.module.scss';

import { classNames } from '@/shared/lib';

interface PreloaderProps {
  className?: string;
  height?: 'full' | 'custom';
}

export const Preloader = ({ className, height }: PreloaderProps) => {
  return (
    <div
      className={classNames(
        styles.wrap_loader,
        height === 'full' && styles.height_full,
        className
      )}
      data-testid='Preloader.wrap'
    >
      <span className={styles.loader}></span>
    </div>
  );
};
