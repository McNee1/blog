import { useTranslation } from 'react-i18next';
import SVG from 'react-inlinesvg';

import styles from './SearchArticle.module.scss';

import searchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib';
import { TextField } from '@/shared/ui';

interface SearchProps<T> {
  className?: string;
  onSearch: (value: T) => void;
  value: T;
}

export const SearchArticle = <T extends string>({
  className,
  onSearch,
  value,
}: SearchProps<T>) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.input_wrap, className)}>
      <div className={styles.svg_wrap}>
        <SVG
          src={searchIcon}
          width={16}
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
