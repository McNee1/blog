import {
  ComponentProps,
  CSSProperties,
  memo,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import cls from './AppImage.module.scss';

import { classNames } from '@/shared/lib';

import placeholder from '/src/shared/assets/img/placeholder.jpg';

type Round = 'full' | 'sm' | 'none';

type ScrType = string | undefined;

interface AppImageProps extends ComponentProps<'img'> {
  alt?: string;
  center?: boolean;
  className?: string;
  errorFallback?: ReactElement;
  fallback?: ReactElement;
  fallbackError?: boolean;
  round?: Round;
  size?: number;
  src: ScrType;
  styles?: CSSProperties;
}

const roundClasses: Record<Round, string> = {
  full: cls.fullRound,
  sm: cls.smRound,
  none: 'none',
};

export const AppImage = memo(function AppImage({
  src,
  size,
  styles,
  alt,
  center = false,
  fallbackError = true,
  className,
  round = 'none',
  fallback,
  ...restProps
}: AppImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const renderImage = useCallback(
    (src: ScrType) => (
      <>
        {src && (
          <img
            {...restProps}
            className={classNames(
              cls.image,
              center && cls.center,
              roundClasses[round] !== 'none' && roundClasses[round]
            )}
            style={{ ...style, ...styles }}
            src={src}
            alt={alt}
          />
        )}
      </>
    ),
    [alt, center, restProps, round, style, styles]
  );

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && fallbackError) {
    return renderImage(placeholder);
  }

  return className ? (
    <div className={classNames(cls.img_wrap, className)}>{renderImage(src)}</div>
  ) : (
    renderImage(src)
  );
});
