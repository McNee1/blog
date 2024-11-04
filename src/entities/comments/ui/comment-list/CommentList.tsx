import { memo } from 'react';

import { Card, Typography } from '@/shared/ui';

import { Comment } from '../../model';
import { CommentCard } from '../comment-card';
import { CommentSkeleton } from '../comment-skeleton';

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
  if (isLoading) {
    return <CommentSkeleton />;
  }

  if (error) {
    return (
      <Typography
        variant='error'
        content={error}
        align='center'
        as='h2'
      />
    );
  }

  if (!comments?.length) {
    return (
      <Card>
        <Typography
          content={'No comments'}
          size='sm'
          as='p'
        />
      </Card>
    );
  }

  return (
    <Card flex={{ direction: 'col' }}>
      {comments?.map((com) => (
        <CommentCard
          comment={com}
          key={com.id}
        />
      ))}
    </Card>
  );
});
