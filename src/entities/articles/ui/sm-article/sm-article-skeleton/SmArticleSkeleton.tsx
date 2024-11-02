import { Card, FlexCol, FlexRow, Skeleton } from '@/shared/ui';

const arr = [...Array.from({ length: 3 })];

export const SmArticleSkeleton = () => {
  return (
    <FlexCol
      gap='gap10'
      maxWidth
      wrap
    >
      {arr.map((_, id) => {
        return (
          <Card key={id}>
            <FlexRow
              space={{ marginButton: 'mb10' }}
              gap='gap10'
            >
              <Skeleton
                margin='0 0 5px 0'
                border='7px'
                height={15}
                width={70}
              />
            </FlexRow>
            <FlexCol gap='gap6'>
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
            </FlexCol>
          </Card>
        );
      })}
    </FlexCol>
  );
};
