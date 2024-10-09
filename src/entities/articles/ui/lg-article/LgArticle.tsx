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
  FlexGroup,
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
      <FlexGroup
        spaceButton='space6'
        direction='col'
        gap='gap8'
      >
        <UserCard
          avatar={article.user?.avatar}
          className={styles.author}
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

        <div className={styles.info}>
          <ViewCount
            className={styles.info_count}
            views={article.views}
          />
          <DateView
            options={{ dateStyle: 'medium' }}
            date={article.createdAt}
          />
        </div>
      </FlexGroup>
      <div className={styles.card_body}>
        <Typography
          titleClass={styles.title}
          title={article.title}
          titleLevel='h3'
          titleSize='lg'
        />
        <Typography
          textClass={styles.subtitle}
          text={article.subtitle}
          textSize='md'
        />

        <BadgeList
          spaceButton='space14'
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
