import styles from './ArticleIntro.module.scss';

import { FORMAT_DATE_OPT } from '@/shared/constants';
import { DateView, FlexGroup, Typography, ViewCount } from '@/shared/ui';

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

        <DateView
          date={articleDetail?.createdAt}
          className={styles.calendar}
          options={FORMAT_DATE_OPT}
        />

        <ViewCount
          views={articleDetail?.views}
          className={styles.eye}
        />

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
