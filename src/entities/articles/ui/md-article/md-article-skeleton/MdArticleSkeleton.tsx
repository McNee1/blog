import styles from './MdArticleSkeleton.module.scss';

import { Card, FlexGroup, Skeleton } from '@/shared/ui';

const arr = [...Array.from({ length: 6 })];

export const MdArticleSkeleton = () => {
  return (
    <FlexGroup
      direction='row'
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
            <FlexGroup
              spaceButton='space10'
              direction='row'
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
            </FlexGroup>
            <FlexGroup
              spaceButton='space20'
              direction='col'
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
            </FlexGroup>

            <FlexGroup
              className={styles.skeleton_footer}
              alignItems='center'
              direction='row'
              spaceTop='auto'
              gap='gap8'
            >
              <Skeleton
                otherStyle={{ flex: '1 0 auto' }}
                border='99px'
                height={45}
                width={45}
              />
              <FlexGroup
                className={styles.skeleton_info}
                direction='col'
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
              </FlexGroup>
            </FlexGroup>
          </Card>
        );
      })}
    </FlexGroup>
  );
};
