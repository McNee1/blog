import { useAppSelector } from '@/shared/lib';

import { ArticlesList } from '@/entities';

import {
  getArticlesData,
  getArticlesError,
  getArticlesIsLoading,
  getArticlesLayout,
} from '../../../../model';

export const ArticlesInfiniteList = () => {
  const articles = useAppSelector(getArticlesData);
  const error = useAppSelector(getArticlesError);
  const isLoading = useAppSelector(getArticlesIsLoading);
  const activeLayout = useAppSelector(getArticlesLayout);

  return (
    <ArticlesList
      layoutType={activeLayout}
      isLoading={isLoading}
      articles={articles}
      error={error}
    />
  );
};
