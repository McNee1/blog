import { ComponentProps, ReactNode } from 'react';

import { AppImage, Flex, FlexRow, Skeleton } from '@/shared/ui';

type RoundImage = ComponentProps<typeof AppImage>;

type FlexProps = ComponentProps<typeof Flex>;

interface UserCardProps
  extends Pick<RoundImage, 'round' | 'size'>,
    Omit<FlexProps, 'direction' | 'children'> {
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
    <FlexRow
      dataTestId={dataTestId}
      className={className}
      {...flexProps}
    >
      <AppImage
        fallback={
          <Skeleton
            height='50px'
            border='7px'
            width='50px'
          />
        }
        src={avatar ?? '/src/shared/assets/img/no-user-image-icon.webp'}
        round={round}
        size={size}
      />

      {children}
    </FlexRow>
  );
};
