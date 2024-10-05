import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib';

import { ArticlesList } from '@/entities';

import {
  fetchUserArticles,
  getUserArticles,
  getUserArticlesError,
  getUserArticlesIsLoading,
} from '../../model';

interface ArticlesListProps {
  id?: string;
}

export const MyArticles = ({ id }: ArticlesListProps) => {
  const dispatch = useAppDispatch();

  const articles = useAppSelector(getUserArticles);
  const error = useAppSelector(getUserArticlesError);
  const isLoading = useAppSelector(getUserArticlesIsLoading);

  useEffect(() => {
    if (id) {
      void dispatch(fetchUserArticles(id));
    }
  }, [dispatch, id]);

  return (
    <ArticlesList
      isLoading={isLoading}
      articles={articles}
      layoutType={'list'}
      error={error}
    ></ArticlesList>
  );
};
