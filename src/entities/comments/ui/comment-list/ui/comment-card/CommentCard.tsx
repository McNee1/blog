import { memo } from 'react';

import styles from './CommentCard.module.scss';

import { FORMAT_DATE_OPT } from '@/shared/constants';
import { formatDate, getProfilePath } from '@/shared/lib';
import { AppImage, AppLink, Typography } from '@/shared/ui';

import { Comment } from '../../../../model';

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard = memo(function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_header}>
        <AppLink to={getProfilePath(comment.userId)}>
          <AppImage
            src={comment.user.avatar}
            round='sm'
            size={35}
          />
        </AppLink>
        <div className={styles.comment_name}>
          <AppLink
            to={getProfilePath(comment.userId)}
            type='primary'
          >
            {comment.user.username}
          </AppLink>
        </div>

        <time className={styles.comment_date}>
          {formatDate(comment.date, FORMAT_DATE_OPT)}
        </time>
      </div>
      <Typography
        text={comment.text}
        textSize='md'
      />
    </div>
  );
});
