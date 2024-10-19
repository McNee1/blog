import styles from './ArticleSkeleton.module.scss';

import { Skeleton } from '@/shared/ui';

export const ArticleSkeleton = () => {
  return (
    <div className={styles.article_skeleton}>
      <Skeleton
        margin='0 0 10px 0'
        border='7px'
        height={150}
        width={150}
      />

      <Skeleton
        margin='0 0 15px 0'
        height={30}
        width='50%'
      />
      <Skeleton
        margin='0 0 15px 0'
        height={20}
        width='70%'
      />

      <Skeleton
        margin='0 0 15px 0'
        width='100%'
        height={15}
      />
      <Skeleton
        margin='0 0 15px 0'
        width='80%'
        height={13}
      />
      <Skeleton
        width='50%'
        height={13}
      />
    </div>
  );
};
