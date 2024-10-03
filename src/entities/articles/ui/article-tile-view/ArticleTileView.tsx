import type { ArticleType } from '@/entities';

import { memo } from 'react';

import styles from './ArticleTileView.module.scss';

import eye from '@/shared/assets/icons/eye.svg';
import { formatDate, getArticleDetailPath, getProfilePath } from '@/shared/lib';
import { AppIcon, AppLink, Card, FlexGroup, Typography } from '@/shared/ui';

import { BadgeList, UserCard } from '@/entities';

interface ArticleTileViewProps {
  article: ArticleType;
}

export const ArticleTileView = memo(function ArticleTileView({
  article,
}: ArticleTileViewProps) {
  return (
    <Card className={styles.tile_card}>
      <div className={styles.card_header}>
        <BadgeList types={article.type} />
      </div>
      <div className={styles.card_body}>
        <AppLink
          to={getArticleDetailPath(article.id)}
          className={styles.title}
        >
          {article.title}
        </AppLink>

        <Typography text={article.subtitle} />
      </div>

      <UserCard
        className={styles.card_footer}
        avatar={article.user?.avatar}
        alignItems='center'
        spaceTop='auto'
        round='full'
      >
        <FlexGroup
          spaceLeft='space10'
          direction='col'
          gap='gap6'
        >
          <AppLink
            to={getProfilePath(article.userId)}
            className={styles.author_link}
            type='primary'
          >
            {article.user.username ?? 'deleted'}
          </AppLink>

          <time className={styles.date}>
            {formatDate(article.createdAt, { dateStyle: 'medium' })}
          </time>
        </FlexGroup>

        <FlexGroup
          className={styles.view_count}
          spaceLeft='auto'
          direction='row'
          gap='gap8'
        >
          <AppIcon
            width='18px'
            src={eye}
          />
          <Typography
            text={String(article.views)}
            textClass={styles.count}
          />
        </FlexGroup>
      </UserCard>
    </Card>
  );
});
