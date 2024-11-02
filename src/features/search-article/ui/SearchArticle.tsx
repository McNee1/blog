import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SearchArticle.module.scss';

import searchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib';
import { AppIcon, TextField } from '@/shared/ui';

interface SearchProps<T> {
  className?: string;
  onSearch: (value: T) => void;
  value: T;
}

const SearchArticleComponent = <T extends string>({
  className,
  onSearch,
  value,
}: SearchProps<T>) => {
  const { t } = useTranslation('transition');

  return (
    <div className={classNames(styles.input_wrap, className)}>
      <div className={styles.svg_wrap}>
        <AppIcon
          src={searchIcon}
          height='16px'
          width='16px'
        />
      </div>
      <TextField
        onChange={(e) => onSearch(e.target.value as T)}
        className={classNames(styles.input)}
        placeholder={t('search')}
        value={value}
      />
    </div>
  );
};

export const SearchArticle = memo(SearchArticleComponent);
