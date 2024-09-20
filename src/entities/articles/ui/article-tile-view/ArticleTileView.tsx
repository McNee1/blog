import type { ArticleType } from '@/entities';

import { memo } from 'react';
import SVG from 'react-inlinesvg';

import styles from './ArticleTileView.module.scss';

import eye from '@/shared/assets/icons/eye.svg';
import { RoutePath } from '@/shared/lib';
import { formatDate } from '@/shared/lib';
import { AppLink, Card, FlexGroup, Typography } from '@/shared/ui';

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
          to={RoutePath.article_detail + article.id}
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
        size={40}
      >
        <FlexGroup
          spaceLeft='space10'
          direction='col'
          gap='gap6'
        >
          <AppLink
            to={`${RoutePath.profile}${article.userId}`}
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
          spaceLeft='auto'
          direction='row'
          gap='gap8'
        >
          <SVG
            width={18}
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
