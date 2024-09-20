import type { ArticleCategory } from '@/entities';

import { ComponentProps, memo } from 'react';

import { Badge, FlexGroup } from '@/shared/ui';

import { getTypeColor } from '../lib';

type FlexGroupProps = ComponentProps<typeof FlexGroup>;

interface BadgeListProps extends Partial<Omit<FlexGroupProps, 'children'>> {
  types: ArticleCategory[];
}

export const BadgeList = memo(function BadgeList({
  types,
  direction = 'row',
  gap = 'gap6',
  ...flexProps
}: BadgeListProps) {
  return (
    <FlexGroup
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
    </FlexGroup>
  );
});
