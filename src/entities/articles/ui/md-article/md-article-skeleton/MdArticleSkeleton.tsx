import styles from './MdArticleSkeleton.module.scss';

import { Card, FlexCol, FlexRow, Skeleton } from '@/shared/ui';

const arr = [...Array.from({ length: 6 })];

export const MdArticleSkeleton = () => {
  return (
    <FlexRow
      gap='gap10'
      maxWidth
      wrap
    >
      {arr.map((_, id) => {
        return (
          <Card
            className={styles.skeleton_tile}
            key={id}
          >
            <FlexRow
              space={{ marginButton: 'mb10' }}
              gap='gap10'
            >
              <Skeleton
                margin='0 0 5px 0'
                border='7px'
                height={15}
                width={50}
              />
              <Skeleton
                margin='0 0 5px 0'
                border='7px'
                height={15}
                width={50}
              />
            </FlexRow>
            <FlexCol
              space={{ marginButton: 'mb20' }}
              gap='gap6'
            >
              <Skeleton
                width='65%'
                height={15}
              />
              <Skeleton
                width='95%'
                height={10}
              />
            </FlexCol>

            <FlexRow
              className={styles.skeleton_footer}
              space={{ marginTop: 'auto' }}
              alignItems='center'
              gap='gap8'
            >
              <Skeleton
                otherStyle={{ flex: '1 0 auto' }}
                border='99px'
                height={45}
                width={45}
              />
              <FlexCol
                className={styles.skeleton_info}
                gap='gap6'
                maxWidth
              >
                <Skeleton
                  width='90%'
                  height={14}
                />
                <Skeleton
                  width='40%'
                  height={10}
                />
              </FlexCol>
            </FlexRow>
          </Card>
        );
      })}
    </FlexRow>
  );
};
