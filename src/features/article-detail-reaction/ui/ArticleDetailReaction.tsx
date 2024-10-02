import { useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Card, Reaction } from '@/shared/ui';

import { articleDetailAction, getArticleDetailReaction, getUserData } from '@/entities';

import {
  useGetUserReactionQuery,
  usePostReactionMutation,
  useUpdateReactionByArticleIdMutation,
} from '../api';

interface ArticleDetailReactionProps {
  articleId: string | undefined;
}

export const ArticleDetailReaction = ({ articleId }: ArticleDetailReactionProps) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(getUserData)?.id;

  const { data, isLoading } = useGetUserReactionQuery({ articleId, userId });

  const reaction = data?.[0];

  const reactionIdRef = useRef<number | undefined>(reaction?.id);

  const reactionArticle = useAppSelector(getArticleDetailReaction);

  const [updateArticle, { isLoading: postIsLoading }] =
    useUpdateReactionByArticleIdMutation();

  const [postReaction] = usePostReactionMutation();

  const handleRatingChange = (type: 'like' | 'dislike') => {
    if (!articleId || !userId) {
      return;
    }
    dispatch(articleDetailAction.setReaction({ type }));

    void updateArticle({
      articleId,
      reaction: type === 'like' ? reactionArticle + 1 : reactionArticle - 1,
    });

    void postReaction({
      id: reactionIdRef.current,
      articleId,
      userId,
      reaction: type,
    }).then((e) => {
      if (e.data?.id) {
        reactionIdRef.current ??= e.data?.id;
      }
    });
  };

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Card>
      <div data-testid='ArticleDetailReaction'>
        <Reaction
          onRatingChange={handleRatingChange}
          countReaction={reactionArticle}
          reaction={reaction?.reaction}
          disabled={postIsLoading}
          size={27}
        />
      </div>
    </Card>
  );
};
