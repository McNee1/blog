import { memo, useState } from 'react';

import styles from './Reaction.module.scss';

import dislikeIcon from '@/shared/assets/icons/dislike.svg';
import likeIcon from '@/shared/assets/icons/like.svg';
import { classNames } from '@/shared/lib';

import { AppIcon } from '../../app-icon';

interface ReactionProps {
  className?: string;
  countReaction?: number;
  disabled?: boolean;
  onRatingChange: (type: 'dislike' | 'like' | 'neutral') => void;
  reaction?: 'dislike' | 'like' | 'neutral';
  size?: number;
}

const LIKE = 'like';
const DISLIKE = 'dislike';
const NEUTRAL = 'neutral';

export const Reaction = memo(function Reaction({
  size = 40,
  className,
  reaction,
  onRatingChange,
  countReaction,
  disabled,
}: ReactionProps) {
  const [isLike, setIsLike] = useState(reaction === LIKE);
  const [isDislike, setIsDislike] = useState(reaction === DISLIKE);

  const handleLike = () => {
    if (isLike) {
      setIsLike(false);
      onRatingChange(NEUTRAL);
      return;
    }
    setIsLike(true);
    setIsDislike(false);

    onRatingChange(LIKE);
  };
  const handleDislike = () => {
    if (isDislike) {
      setIsDislike(false);

      onRatingChange(NEUTRAL);
      return;
    }
    setIsDislike(true);
    setIsLike(false);

    onRatingChange(DISLIKE);
  };

  const handleRatingChange = (type: 'like' | 'dislike') => {
    if (type === LIKE) {
      handleLike();
    } else {
      handleDislike();
    }
  };

  const countClass = countReaction && countReaction >= 0 ? 'positive' : 'negative';
  const sign = countClass === 'positive' ? '+' : '';
  console.log(countClass);

  return (
    <div
      className={classNames(styles.like_rating, disabled && styles.disabled, className)}
    >
      <AppIcon
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
      <AppIcon
        className={classNames(styles.svg, isDislike && styles.disliked)}
        onClick={() => handleRatingChange('dislike')}
        src={dislikeIcon}
        height={size}
        width={size}
      />
    </div>
  );
});
