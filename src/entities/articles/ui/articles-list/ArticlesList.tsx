import type { ArticleType } from '@/entities';
import type { ArticleLayoutType } from '@/pages';

import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { FlexGroup, Typography } from '@/shared/ui';

import { getArticleComponent, getLoaderComponent } from '../../lib';

type Direction = Pick<ComponentProps<typeof FlexGroup>, 'direction'>['direction'];

const direction: Record<ArticleLayoutType, Direction> = {
  card: 'col',
  tile: 'row',
  list: 'col',
};

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

  const loader = getLoaderComponent(layoutType);

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
      gap={layoutType === 'card' ? 'gap10' : 'gap12'}
      className={classNames(className)}
      direction={direction[layoutType]}
      wrap={layoutType === 'tile'}
    >
      {articles?.map((article) => getArticleComponent(layoutType, article))}
      {isLoading && loader}
    </FlexGroup>
  );
};
