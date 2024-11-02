import { ReactionType } from '@/shared/types';

export const updateReactionCount = (currType: ReactionType, prevType?: ReactionType) => {
  const reactionChange: Record<string, number> = {
    'like-dislike': 1,
    'dislike-like': -1,
    'dislike-neutral': -1,
    'neutral-dislike': 1,
    'neutral-like': -1,
    'like-neutral': 1,
  };

  const changeKey = `${currType}-${prevType}`;
  return reactionChange[changeKey] ?? 0;
};
