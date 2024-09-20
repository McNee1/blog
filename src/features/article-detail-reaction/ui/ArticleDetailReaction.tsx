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

  const reactionArticle = useAppSelector(getArticleDetailReaction);

  console.log(reactionArticle, reaction);

  const [updateArticle] = useUpdateReactionByArticleIdMutation();
  const [postReaction] = usePostReactionMutation();

  const handleRatingChange = (type: { isDislike: boolean; isLike: boolean }) => {
    dispatch(articleDetailAction.setReaction({ isLike: type.isLike }));
    console.log(type);

    void updateArticle({
      articleId,
      reaction: type.isLike ? reactionArticle + 1 : reactionArticle - 1,
    });

    void postReaction({
      id: reaction?.id,
      articleId,
      userId,
      isDislike: type.isDislike,
      isLike: type.isLike,
    });
  };
  // console.log(reactionCount);

  if (isLoading) {
    return '';
  }

  return (
    <Card>
      <Reaction
        onRatingChange={handleRatingChange}
        isDisliked={reaction?.isDislike}
        countReaction={reactionArticle}
        isLiked={reaction?.isLike}
        size={27}
      />
    </Card>
  );
};
