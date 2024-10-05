import styles from './ArticleIntro.module.scss';

import calendar from '@/shared/assets/icons/calendar.svg';
import eye from '@/shared/assets/icons/eye.svg';
import { FORMAT_DATE_OPT } from '@/shared/constants';
import { formatDate } from '@/shared/lib';
import { AppIcon, AppImage, FlexGroup, Skeleton, Typography } from '@/shared/ui';

import type { ArticleType } from '../../../../model';

interface ArticleIntroProps {
  articleDetail: ArticleType | null;
}

export const ArticleIntro = ({ articleDetail }: ArticleIntroProps) => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.title_intro}>
          <Typography
            text={articleDetail?.subtitle}
            title={articleDetail?.title}
            titleWeight='normal'
            titleLevel='h1'
            titleSize='lg'
          />
        </div>
        <AppImage
          fallback={
            <Skeleton
              margin='0 0 20px 0'
              height='300px'
            />
          }
          className={styles.intro_img}
          src={articleDetail?.img}
          fallbackError={false}
        />

        <FlexGroup
          className={styles.calendar}
          direction='row'
          gap='gap12'
        >
          <AppIcon
            src={calendar}
            height='20px'
            width='20px'
          />
          <time>{formatDate(articleDetail?.createdAt, FORMAT_DATE_OPT)}</time>
        </FlexGroup>
        <FlexGroup
          className={styles.eye}
          spaceButton='space6'
          direction='row'
          gap='gap12'
        >
          <AppIcon
            width='20'
            src={eye}
          />
          <Typography text={String(articleDetail?.views)} />
        </FlexGroup>

        <FlexGroup
          direction='row'
          gap='gap8'
        >
          {articleDetail?.type.join(', ').toLowerCase()}
        </FlexGroup>
      </div>
    </>
  );
};
