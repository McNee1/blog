import { memo, useState } from 'react';
import SVG from 'react-inlinesvg';

import styles from './Reaction.module.scss';

import dislikeIcon from '@/shared/assets/icons/dislike.svg';
import likeIcon from '@/shared/assets/icons/like.svg';
import { classNames } from '@/shared/lib';

interface ReactionProps {
  className?: string;
  countReaction?: number;
  isDisliked?: boolean;
  isLiked?: boolean;
  onRatingChange: (type: { isDislike: boolean; isLike: boolean }) => void;
  size?: number;
}

export const Reaction = memo(function Reaction({
  size = 40,
  className,
  isDisliked = false,
  onRatingChange,
  isLiked = false,
  countReaction,
}: ReactionProps) {
  const [isLike, setIsLike] = useState(isLiked);
  const [isDislike, setIsDislike] = useState(isDisliked);

  const handleLike = () => {
    if (isLike) {
      return;
    }
    setIsLike(true);
    setIsDislike(false);
    onRatingChange({ isLike: true, isDislike: false });
  };
  const handleDislike = () => {
    if (isDislike) {
      return;
    }
    setIsDislike(true);
    setIsLike(false);
    onRatingChange({ isLike: false, isDislike: true });
  };

  const handleRatingChange = (type: 'like' | 'dislike') => {
    if (type === 'like') {
      handleLike();
    } else {
      handleDislike();
    }
  };

  const countClass = countReaction && countReaction >= 0 ? 'positive' : 'negative';
  const sign = countClass === 'positive' ? '+' : '';

  return (
    <div className={classNames(styles.like_rating, className)}>
      <SVG
        className={classNames(styles.svg, isLike && styles.liked)}
        onClick={() => handleRatingChange('like')}
        src={likeIcon}
        height={size}
        width={size}
      />
      {countReaction && (
        <span className={classNames(styles.count, styles[countClass])}>
          {`${sign}${countReaction}`}
        </span>
      )}
      <SVG
        className={classNames(styles.svg, isDislike && styles.disliked)}
        onClick={() => handleRatingChange('dislike')}
        src={dislikeIcon}
        height={size}
        width={size}
      />
    </div>
  );
});
