import { Card, FlexGroup, Skeleton } from '@/shared/ui';

export const LgArticleSkeleton = () => {
  return (
    <Card>
      <FlexGroup
        direction='col'
        gap='gap10'
      >
        <FlexGroup
          alignItems='center'
          direction='row'
          gap='gap10'
        >
          <Skeleton
            border='99px'
            height={50}
            width={50}
          />
          <FlexGroup
            direction='col'
            gap='gap8'
          >
            <Skeleton
              height={20}
              width={150}
            />
            <Skeleton
              height={10}
              width={100}
            />
          </FlexGroup>
        </FlexGroup>
        <FlexGroup
          direction='col'
          gap='gap8'
        >
          <Skeleton
            height={15}
            width={200}
          />
          <Skeleton
            height={15}
            width={250}
          />

          <Skeleton height={250} />
        </FlexGroup>
      </FlexGroup>
    </Card>
  );
};
