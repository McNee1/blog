import { ComponentProps, CSSProperties, memo, useCallback, useMemo } from 'react';

import cls from './AppImage.module.scss';

import { classNames } from '@/shared/lib';

type Round = 'full' | 'sm' | 'none';

interface AppImageProps extends ComponentProps<'img'> {
  alt?: string;
  center?: boolean;
  className?: string;
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
  ...restProps
}: AppImageProps) {
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

  return className ? (
    <div className={classNames(cls.img_wrap, className)}>{renderImage()}</div>
  ) : (
    renderImage()
  );
});
