import { useEffect, useRef, useState } from 'react';

import { updateReactionCount, useAppDispatch, useAppSelector } from '@/shared/lib';
import { ReactionType } from '@/shared/types';
import { Card, Reaction } from '@/shared/ui';

import { getUserId } from '@/entities';

import {
  useGetUserReactionQuery,
  usePostReactionMutation,
  useUpdateReactionByArticleIdMutation,
} from '../../api';
import { articleDetailAction, getArticleDetailReaction } from '../../model';

interface ArticleDetailReactionProps {
  articleId: string | undefined;
}

export const ArticleDetailReaction = ({ articleId }: ArticleDetailReactionProps) => {
  const dispatch = useAppDispatch();

  const [isDisabled, setIsDisabled] = useState(false);

  const userId = useAppSelector(getUserId);

  const { data, isLoading } = useGetUserReactionQuery(
    { articleId, userId },
    { skip: !userId }
  );

  const reaction = data?.[0];

  const reactionRef = useRef<{ reactionId: number; prevType?: ReactionType } | null>(
    null
  );

  const reactionArticle = useAppSelector(getArticleDetailReaction);

  const [updateArticle] = useUpdateReactionByArticleIdMutation();

  const [postReaction] = usePostReactionMutation();

  useEffect(() => {
    if (reaction) {
      reactionRef.current = { reactionId: reaction.id, prevType: reaction.reaction };
    }
  }, [data, reaction]);

  const handleRatingChange = async (type: ReactionType) => {
    if (!articleId || !userId) return;

    setIsDisabled(true);
    dispatch(
      articleDetailAction.setReaction({
        currType: type,
        prevType: reactionRef.current?.prevType,
      })
    );

    await updateArticle({
      articleId,
      reaction:
        reactionArticle + updateReactionCount(type, reactionRef.current?.prevType),
    });

    const { data } = await postReaction({
      id: reactionRef.current?.reactionId ?? null,
      articleId,
      userId,
      reaction: type,
    });

    if (data) {
      reactionRef.current = { reactionId: data?.id, prevType: type };
    }
    setIsDisabled(false);
  };

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Card>
      <Reaction
        onRatingChange={(type: ReactionType) => {
          void handleRatingChange(type);
        }}
        countReaction={reactionArticle}
        reaction={reaction?.reaction}
        disabled={isDisabled}
        size={27}
      />
    </Card>
  );
};
