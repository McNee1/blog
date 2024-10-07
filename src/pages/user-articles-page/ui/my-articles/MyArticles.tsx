import { useEffect } from 'react';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';

import { ArticlesList } from '@/entities';

import {
  fetchUserArticles,
  getUserArticles,
  getUserArticlesError,
  getUserArticlesIsLoading,
  userArticlesReducer,
} from '../../model';

const initialReducer = { userArticles: userArticlesReducer };

interface MyArticlesProps {
  id?: string;
}

export const MyArticles = ({ id }: MyArticlesProps) => {
  const articles = useAppSelector(getUserArticles);
  const error = useAppSelector(getUserArticlesError);
  const isLoading = useAppSelector(getUserArticlesIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      void dispatch(fetchUserArticles(id));
    }
  }, [dispatch, id]);

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <ArticlesList
        isLoading={isLoading}
        articles={articles}
        layoutType={'list'}
        error={error}
      ></ArticlesList>
    </AsyncSliceManager>
  );
};
