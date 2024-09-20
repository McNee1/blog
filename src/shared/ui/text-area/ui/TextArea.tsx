import { ChangeEvent, ComponentProps, memo, useEffect, useMemo, useRef } from 'react';

import styles from './TextArea.module.scss';

import { classNames, useThrottle } from '@/shared/lib';

interface TextAreaProps extends Omit<ComponentProps<'textarea'>, 'onInput'> {
  autoHeight?: boolean;
  border?: boolean;
  editable?: boolean;
  label?: string;
  labelClass?: string;
  onInput?: (value: string) => void;
  size?: 'sm' | 'md' | 'xl';
}

export const TextArea = memo(function TextArea({
  className,
  label,
  id,
  labelClass,
  autoHeight = false,
  onInput,
  editable = true,
  size = 'sm',
  border = false,
  ...rest
}: TextAreaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const autoGrow = (element: HTMLElement | null) => {
    if (!element) return;
    element.style.height = '10px';
    element.style.height = element.scrollHeight + 'px';
  };

  const throttledAutoGrow = useThrottle(() => autoGrow(ref.current), 200);

  const callbackResize = useMemo(
    () => (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          throttledAutoGrow();
        }
      }
    },
    [throttledAutoGrow]
  );

  const resizeObserver = useMemo(
    () => new ResizeObserver(callbackResize),
    [callbackResize]
  );

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onInput?.(event.target.value);
  };

  useEffect(() => {
    if (autoHeight && ref.current) {
      resizeObserver.observe(ref.current);
      autoGrow(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [autoHeight, ref, resizeObserver]);
  return (
    <>
      {label && (
        <label
          className={classNames(styles.label, labelClass)}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        onChange={handleInput}
        ref={ref}
        {...rest}
        className={classNames(
          styles.textarea,
          !editable && styles.not_editable,
          styles[size],
          !border && styles.not_border,
          className
        )}
        id={id}
      />
    </>
  );
});
