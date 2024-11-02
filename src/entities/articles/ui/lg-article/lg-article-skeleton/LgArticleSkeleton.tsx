import { Card, FlexCol, FlexRow, Skeleton } from '@/shared/ui';
// wrapp
export const LgArticleSkeleton = () => {
  return (
    <Card>
      <FlexCol gap='gap10'>
        <FlexRow
          alignItems='center'
          gap='gap10'
        >
          <Skeleton
            border='99px'
            height={50}
            width={50}
          />
          <FlexCol gap='gap8'>
            <Skeleton
              height={20}
              width={150}
            />
            <Skeleton
              height={10}
              width={100}
            />
          </FlexCol>
        </FlexRow>
        <FlexCol gap='gap8'>
          <Skeleton
            height={15}
            width={200}
          />
          <Skeleton
            height={15}
            width={250}
          />

          <Skeleton height={250} />
        </FlexCol>
      </FlexCol>
    </Card>
  );
};
