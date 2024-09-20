import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './CommentList.module.scss';

import { Card, Typography } from '@/shared/ui';

import { Comment } from '../../model';
import { CommentCard, CommentSkeleton } from './ui';

interface CommentListProps {
  comments: Comment[] | null;
  error: string | null;
  isLoading: boolean;
}

export const CommentList = memo(function CommentList({
  comments,
  error,
  isLoading,
}: CommentListProps) {
  const { t } = useTranslation();

  let commentsContent;

  if (comments?.length) {
    commentsContent = comments.map((com) => (
      <CommentCard
        comment={com}
        key={com.id}
      />
    ));
  } else {
    commentsContent = <Typography text={t('No comments')} />;
  }

  return (
    <section>
      <Typography
        titleClass={styles.comment_title}
        title={t('Comments')}
        titleLevel='h2'
        titleSize='lg'
      />

      <div className={styles.comment_list}>
        {isLoading ? (
          <CommentSkeleton />
        ) : error ? (
          <Typography
            titleLevel='h2'
            align='center'
            theme='error'
            title={error}
          />
        ) : (
          <Card>{commentsContent}</Card>
        )}
      </div>
    </section>
  );
});
