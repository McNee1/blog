import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './FilterArticleCategory.module.scss';

import { CATEGORY } from '@/shared/constants';
import { classNames } from '@/shared/lib';
import { FlexGroup } from '@/shared/ui';

import { ArticleCategory } from '@/entities';

interface FilterArticleCategoryProps {
  categoryValue: ArticleCategory;
  className?: string;
  onChangeCategory: (value: ArticleCategory) => void;
}

export const FilterArticleCategory = memo(function FilterArticleCategory({
  categoryValue,
  className,
  onChangeCategory,
}: FilterArticleCategoryProps) {
  const { t } = useTranslation('article');

  const handlerFIlterCategory = (newOrder: ArticleCategory) => {
    onChangeCategory(newOrder);
  };

  return (
    <FlexGroup
      className={classNames(styles.tabs, className)}
      direction='col'
      gap='gap4'
    >
      {CATEGORY.map((cat) => (
        <div
          className={classNames(
            styles.tab_item,
            categoryValue == cat && styles.active_tab
          )}
          onClick={() => handlerFIlterCategory(cat)}
          key={cat}
        >
          {t(cat)}
        </div>
      ))}
    </FlexGroup>
  );
});
