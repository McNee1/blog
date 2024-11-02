import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './Toolbar.module.scss';

import { classNames, useAppDispatch, useAppSelector, useDebounce } from '@/shared/lib';
import { Card } from '@/shared/ui';

import { ArticleCategory } from '@/entities';
import {
  FilterArticleCategory,
  OrderType,
  SearchArticle,
  SortArticle,
  SortedType,
} from '@/features';

import {
  articlesAction,
  fetchArticles,
  getArticlesFilterCategory,
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
} from '../../../../model';

interface ToolbarProps {
  className?: string;
}

export const Toolbar = ({ className }: ToolbarProps) => {
  const dispatch = useAppDispatch();

  const [, setSearchParams] = useSearchParams();

  const sort = useAppSelector(getArticlesSort);
  const order = useAppSelector(getArticlesOrder);
  const category = useAppSelector(getArticlesFilterCategory);
  const search = useAppSelector(getArticlesSearch);

  const fetchData = useCallback(
    (paramName: string, paramValue: string) => {
      void dispatch(articlesAction.setPage(1));

      void dispatch(fetchArticles({ replace: true }));

      setSearchParams((searchParams) => {
        if (!paramValue.length) {
          searchParams.delete(paramName);
          return searchParams;
        }

        searchParams.set(paramName, paramValue);
        return searchParams;
      });
    },
    [dispatch, setSearchParams]
  );

  const handleSort = useCallback(
    (value: SortedType) => {
      void dispatch(articlesAction.setSort(value));

      fetchData('sort', value);
    },
    [dispatch, fetchData]
  );

  const handleSortOrder = useCallback(
    (value: OrderType) => {
      void dispatch(articlesAction.setOrder(value));

      fetchData('order', value);
    },
    [dispatch, fetchData]
  );

  const handleFilterCategory = useCallback(
    (value: ArticleCategory) => {
      void dispatch(articlesAction.setCategory(value));

      fetchData('category', value);
    },
    [dispatch, fetchData]
  );

  const debouncedFetchData = useDebounce(
    (value: string) => fetchData('search', value),
    500
  );

  const handleSearch = useCallback(
    (value: string) => {
      void dispatch(articlesAction.setSearch(value));
      debouncedFetchData(value);
    },

    [debouncedFetchData, dispatch]
  );
  return (
    <Card
      className={classNames(styles.toolbar, className)}
      as='aside'
    >
      <SearchArticle
        className={styles.search_input}
        onSearch={handleSearch}
        value={search}
      />

      <SortArticle
        onChangeOrder={handleSortOrder}
        className={styles.selects}
        onChangeSort={handleSort}
        orderValue={order}
        sortValue={sort}
      />
      <FilterArticleCategory
        onChangeCategory={handleFilterCategory}
        categoryValue={category}
        className={styles.tab}
      />
    </Card>
  );
};
