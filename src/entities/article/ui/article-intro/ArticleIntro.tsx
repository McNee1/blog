import styles from './ArticleIntro.module.scss';

import { FORMAT_DATE_OPT } from '@/shared/constants';
import { DateView, FlexRow, Typography, ViewCount } from '@/shared/ui';

import { ArticleType } from '../../model';

interface ArticleIntroProps {
  articleDetail: ArticleType | null;
}

export const ArticleIntro = ({ articleDetail }: ArticleIntroProps) => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.title_intro}>
          <Typography
            content={articleDetail?.title}
            weight='normal'
            size='lg'
            as='h1'
          />
          <Typography
            content={articleDetail?.subtitle}
            weight='normal'
            size='lg'
            as='h1'
          />
        </div>

        <DateView
          date={articleDetail?.createdAt}
          className={styles.calendar}
          options={FORMAT_DATE_OPT}
        />

        <ViewCount
          views={articleDetail?.views}
          className={styles.eye}
        />

        <FlexRow gap='gap8'>{articleDetail?.type.join(', ').toLowerCase()}</FlexRow>
      </div>
    </>
  );
};
