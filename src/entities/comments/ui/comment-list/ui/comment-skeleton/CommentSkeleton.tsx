import styles from './CommentSkeleton.module.scss';

import { Skeleton } from '@/shared/ui';

export const CommentSkeleton = () => {
  return (
    <div className={styles.skeleton_comment}>
      <div className={styles.skeleton_header}>
        <Skeleton
          border='7px'
          height={32}
          width={32}
        />
        <div className={styles.skeleton_title}>
          <Skeleton
            margin='0 0 5px 0'
            height='30%'
            width='30%'
          />
          <Skeleton
            height='40%'
            width='50%'
          />
        </div>
      </div>
      <Skeleton
        margin='0 0 5px 0'
        width='100%'
        height={15}
      />
      <Skeleton
        width='80%'
        height={13}
      />
    </div>
  );
};
