import { ComponentProps, ReactNode } from 'react';

import { AppImage, FlexGroup } from '@/shared/ui';

type RoundImage = ComponentProps<typeof AppImage>;

type FlexGroupProps = ComponentProps<typeof FlexGroup>;

interface UserCardProps
  extends Pick<RoundImage, 'round' | 'size'>,
    Omit<FlexGroupProps, 'direction' | 'children'> {
  avatar?: string;
  children: ReactNode;
  className?: string;
  dataTestId?: string;
}

export const UserCard = ({
  avatar,
  children,
  round = 'sm',
  size = 50,
  className,
  dataTestId,
  ...flexProps
}: UserCardProps) => {
  return (
    <FlexGroup
      dataTestId={dataTestId}
      className={className}
      direction='row'
      {...flexProps}
    >
      <AppImage
        src={avatar ?? '/src/shared/assets/img/no-user-image-icon.webp'}
        round={round}
        size={size}
      />

      {children}
    </FlexGroup>
  );
};
