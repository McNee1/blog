import type { ArticleType } from '@/entities';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LgArticle.module.scss';

import calendar from '@/shared/assets/icons/calendar.svg';
import eye from '@/shared/assets/icons/eye.svg';
import {
  classNames,
  formatDate,
  getArticleDetailPath,
  getProfilePath,
} from '@/shared/lib';
import {
  AppIcon,
  AppImage,
  AppLink,
  Card,
  FlexGroup,
  Skeleton,
  Typography,
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
        className={styles.card_header}
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
          <div className={classNames(styles.inline, styles.eye)}>
            <AppIcon
              width='20px'
              src={eye}
            />
            <span>{article.views}</span>
          </div>
          <div className={classNames(styles.inline, styles.calendar)}>
            <AppIcon
              src={calendar}
              height='20px'
              width='20px'
            />
            <time>{formatDate(article.createdAt, { dateStyle: 'medium' })}</time>
          </div>
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
