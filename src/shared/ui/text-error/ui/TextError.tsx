import { memo } from 'react';

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
  return (
    <>
      {error && (
        <small
          {...props}
          className={styles.errorText}
        >{`${name} ${error}`}</small>
      )}
    </>
  );
});
