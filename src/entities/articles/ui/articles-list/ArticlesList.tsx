import type { ArticleType } from '@/entities';
import type { ArticleLayoutType } from '@/pages';

import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { FlexGroup, Typography } from '@/shared/ui';

import { ArticleCardView, ArticleCardViewSkeleton } from '../article-card-view';
import { ArticleTileView, ArticleTileViewSkeleton } from '../article-tile-view';

interface ArticlesListProps {
  articles: ArticleType[] | null;
  className?: string;
  error: string | null;
  isLoading: boolean;
  layoutType: ArticleLayoutType;
}

export const ArticlesList = ({
  layoutType,
  articles,
  error,
  isLoading,
  className,
}: ArticlesListProps) => {
  const { t } = useTranslation('article');

  const renderArticle = useCallback(
    (article: ArticleType) => {
      if (layoutType === 'card') {
        return (
          <ArticleCardView
            article={article}
            key={article.id}
          />
        );
      } else {
        return (
          <ArticleTileView
            article={article}
            key={article.id}
          />
        );
      }
    },
    [layoutType]
  );

  const getLoader = useMemo(() => {
    return layoutType === 'card' ? (
      <ArticleCardViewSkeleton />
    ) : (
      <ArticleTileViewSkeleton />
    );
  }, [layoutType]);

  if (error) {
    return (
      <Typography
        theme='error'
        text={error}
      />
    );
  } else if (!articles?.length && !isLoading) {
    return (
      <Typography
        text={t('the list of articles is empty')}
        theme='error'
        textSize='md'
      />
    );
  }

  return (
    <FlexGroup
      direction={layoutType === 'card' ? 'col' : 'row'}
      gap={layoutType === 'card' ? 'gap10' : 'gap12'}
      className={classNames(className)}
      wrap={layoutType === 'tile'}
    >
      {articles?.map(renderArticle)}
      {isLoading && getLoader}
    </FlexGroup>
  );
};
