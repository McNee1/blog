import type { ArticleCategory } from '@/entities';

import { ComponentProps, memo } from 'react';

import { Badge, Flex } from '@/shared/ui';

import { getTypeColor } from '../lib';

type FlexProps = ComponentProps<typeof Flex>;

interface BadgeListProps extends Partial<Omit<FlexProps, 'children'>> {
  types: ArticleCategory[];
}

export const BadgeList = memo(function BadgeList({
  types,
  direction = 'row',
  gap = 'gap6',
  ...flexProps
}: BadgeListProps) {
  return (
    <Flex
      direction={direction}
      gap={gap}
      {...flexProps}
    >
      {types.map((type, id) => (
        <Badge
          type={getTypeColor(type)}
          key={id}
        >
          {type}
        </Badge>
      ))}
    </Flex>
  );
});
