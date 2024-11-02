import type { ArticleType } from '@/entities';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LgArticle.module.scss';

import { getArticleDetailPath, getProfilePath } from '@/shared/lib';
import {
  AppImage,
  AppLink,
  Card,
  DateView,
  FlexCol,
  FlexRow,
  Skeleton,
  Typography,
  ViewCount,
} from '@/shared/ui';

import { BadgeList, UserCard } from '@/entities';

interface LgArticleProps {
  article: ArticleType;
}

export const LgArticle = memo(function LgArticle({ article }: LgArticleProps) {
  const { t } = useTranslation('article');

  return (
    <Card>
      <FlexCol
        space={{ marginButton: 'mb6' }}
        gap='gap8'
      >
        <UserCard
          avatar={article.user?.avatar}
          alignItems='center'
          gap='gap10'
        >
          <AppLink
            to={getProfilePath(article.userId)}
            className={styles.author_link}
            type='secondary'
          >
            {article.user.username ?? 'deleted'}
          </AppLink>
        </UserCard>

        <FlexRow
          className={styles.info}
          alignItems='center'
          gap='gap20'
        >
          <ViewCount
            className={styles.info_count}
            views={article.views}
          />
          <DateView
            options={{ dateStyle: 'medium' }}
            date={article.createdAt}
          />
        </FlexRow>
      </FlexCol>
      <div className={styles.card_body}>
        <Typography
          className={styles.title}
          content={article.title}
          size='md'
          as='h3'
        />
        <Typography
          className={styles.subtitle}
          content={article.subtitle}
          size='sm'
        />

        <BadgeList
          space={{ marginButton: 'mb8' }}
          types={article.type}
        />

        {article.img && (
          <AppImage
            fallback={<Skeleton height='200px' />}
            styles={{ maxHeight: '400px' }}
            src={article.img}
          />
        )}
      </div>

      <AppLink
        to={getArticleDetailPath(article.id)}
        className={styles.link}
      >
        {t('read article')} &rarr;
      </AppLink>
    </Card>
  );
});
