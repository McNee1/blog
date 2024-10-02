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

interface AppImageProps extends ComponentProps<'img'> {
  alt?: string;
  center?: boolean;
  className?: string;
  errorFallback?: ReactElement;
  fallback?: ReactElement;
  round?: Round;
  size?: number;
  src: string | undefined;
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
    () => (
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
    [alt, center, restProps, round, src, style, styles]
  );

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError) {
    return (
      <img
        style={{ width: '100%', maxHeight: '300px' }}
        src={placeholder}
      />
    );
  }

  return className ? (
    <div className={classNames(cls.img_wrap, className)}>{renderImage()}</div>
  ) : (
    renderImage()
  );
});
