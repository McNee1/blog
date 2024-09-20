import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './TextError.module.scss';

interface TextErrorProps {
  error?: string;
  name: string;
}

export const TextError = memo(function TextError({
  error,
  name,
  ...props
}: TextErrorProps) {
  const { t } = useTranslation('profile');

  return (
    <>
      {error && (
        <small
          {...props}
          className={styles.errorText}
        >{`${t(name)} ${t(error)}`}</small>
      )}
    </>
  );
});
