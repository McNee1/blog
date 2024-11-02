import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SortArticle.module.scss';

import { CustomSelect, Option, Typography } from '@/shared/ui';

import { OrderType, SortedType } from '../model';

interface OptionFilter<V, N = string> extends Option<V | 'placeholder', N> {
  name: N;
}

type ArticleOptions = OptionFilter<SortedType>;

type OrderOptions = OptionFilter<OrderType>;

interface SortArticleProps {
  className?: string;
  onChangeOrder: (value: OrderType) => void;
  onChangeSort: (value: SortedType) => void;
  orderValue: OrderType;
  sortValue: SortedType;
}

export const SortArticle = memo(function SortArticle({
  onChangeOrder,
  onChangeSort,
  className,
  orderValue,
  sortValue,
}: SortArticleProps) {
  const { t } = useTranslation('article');

  const articleOptions = useMemo<ArticleOptions[]>(
    () => [
      { name: t('date'), value: 'createdAt' },
      { name: t('views'), value: 'views' },
      { name: t('title'), value: 'title' },
    ],
    [t]
  );

  const orderOptions = useMemo<OrderOptions[]>(
    () => [
      { name: t('asc'), value: 'asc' },
      { name: t('desc'), value: 'desc' },
    ],
    [t]
  );

  const handlerSort = useCallback(
    (newSort: SortedType) => {
      onChangeSort(newSort);
    },
    [onChangeSort]
  );

  const handlerSortOrder = useCallback(
    (newOrder: OrderType) => {
      onChangeOrder(newOrder);
    },
    [onChangeOrder]
  );

  return (
    <div className={className}>
      <Typography
        className={styles.title}
        content={t('sort by')}
      />
      <CustomSelect
        className={styles.select}
        options={articleOptions}
        onChange={handlerSort}
        value={sortValue}
      />
      <CustomSelect
        onChange={handlerSortOrder}
        className={styles.select}
        options={orderOptions}
        value={orderValue}
      />
    </div>
  );
});
