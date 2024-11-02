import type { ArticleType } from '@/entities';

import { memo } from 'react';

import styles from './MdArticle.module.scss';

import { formatDate, getArticleDetailPath, getProfilePath } from '@/shared/lib';
import { AppLink, Card, FlexCol, ViewCount } from '@/shared/ui';

import { BadgeList, UserCard } from '@/entities';

interface MdArticleProps {
  article: ArticleType;
}

export const MdArticle = memo(function MdArticle({ article }: MdArticleProps) {
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
      </div>

      <UserCard
        className={styles.card_footer}
        avatar={article.user?.avatar}
        space={{ marginTop: 'auto' }}
        alignItems='center'
        round='full'
      >
        <FlexCol
          space={{ marginLeft: 'ml10' }}
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
        </FlexCol>

        <ViewCount
          className={styles.view_count}
          views={article.views}
        />
      </UserCard>
    </Card>
  );
});
