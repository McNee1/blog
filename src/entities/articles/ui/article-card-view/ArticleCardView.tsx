import type { ArticleType } from '@/entities';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SVG from 'react-inlinesvg';

import styles from './ArticleCardView.module.scss';

import calendar from '@/shared/assets/icons/calendar.svg';
import eye from '@/shared/assets/icons/eye.svg';
import {
  classNames,
  formatDate,
  getArticleDetailPath,
  getProfilePath,
} from '@/shared/lib';
import { AppImage, AppLink, Card, FlexGroup, Typography } from '@/shared/ui';

import { BadgeList, UserCard } from '@/entities';

interface ArticleListWiveProps {
  article: ArticleType;
}

export const ArticleCardView = memo(function ArticleCardView({
  article,
}: ArticleListWiveProps) {
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
          size={40}
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
            <SVG
              width={20}
              src={eye}
            />
            <span>{article.views}</span>
          </div>
          <div className={classNames(styles.inline, styles.calendar)}>
            <SVG
              src={calendar}
              width={20}
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
