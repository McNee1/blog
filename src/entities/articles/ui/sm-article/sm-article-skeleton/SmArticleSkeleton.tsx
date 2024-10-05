import { Card, FlexGroup, Skeleton } from '@/shared/ui';

const arr = [...Array.from({ length: 4 })];

export const SmArticleSkeleton = () => {
  return (
    <FlexGroup
      direction='col'
      gap='gap10'
      maxWidth
      wrap
    >
      {arr.map((_, id) => {
        return (
          <Card key={id}>
            <FlexGroup
              spaceButton='space10'
              direction='row'
              gap='gap10'
            >
              <Skeleton
                margin='0 0 5px 0'
                border='7px'
                height={15}
                width={70}
              />
            </FlexGroup>
            <FlexGroup
              direction='col'
              gap='gap6'
            >
              <Skeleton
                width='65%'
                height={15}
              />
              <Skeleton
                margin='0 0 10px 0'
                width='95%'
                height={10}
              />
              <Skeleton
                width='90%'
                height={14}
              />
            </FlexGroup>
          </Card>
        );
      })}
    </FlexGroup>
  );
};
