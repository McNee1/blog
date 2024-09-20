import { ComponentProps, memo, useEffect, useId, useRef } from 'react';

import styles from './TextField.module.scss';

import { classNames } from '@/shared/lib';

import { Label } from '../../label';

interface TextFieldProps extends ComponentProps<'input'> {
  autoFocus?: boolean;
  error?: string;
  label?: string;
  labelClass?: string;
}

export const TextField = memo(function TextFieldProps({
  label,
  className,
  labelClass,
  autoFocus,
  error,
  readOnly,
  ...otherProps
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const uniqId = useId();

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);
  return (
    <>
      {label && (
        <Label
          className={labelClass}
          label={label}
          id={uniqId}
        />
      )}
      <input
        className={classNames(
          styles.input,
          error && styles.error,
          readOnly && styles.readonly,
          className
        )}
        readOnly={readOnly}
        ref={inputRef}
        id={uniqId}
        {...otherProps}
      />
    </>
  );
});
