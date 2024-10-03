import { ComponentProps, memo } from 'react';
import SVG from 'react-inlinesvg';

import { Skeleton } from '../../skeleton';

type AppIconProps = ComponentProps<typeof SVG>;

export const AppIcon = memo(function AppIcon(props: AppIconProps) {
  const { src, height, width, ...rest } = props;
  return (
    <SVG
      loader={
        <Skeleton
          height={height}
          width={width}
        />
      }
      height={height}
      width={width}
      src={src}
      {...rest}
    />
  );
});
