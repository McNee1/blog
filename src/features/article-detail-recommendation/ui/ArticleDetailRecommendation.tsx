import styles from './ArticleDetailRecommendation.module.scss';

import { getRTKError } from '@/shared/services';
import { Typography } from '@/shared/ui';

import { ArticlesList } from '@/entities';

import { useGetRecommendationArticlesQuery } from '../api';

export const ArticleDetailRecommendation = () => {
  const {
    data: recommendedArticles,
    isLoading,
    error,
  } = useGetRecommendationArticlesQuery();

  if (!recommendedArticles) {
    return null;
  }
  return (
    <div className={styles.recommended}>
      <Typography
        titleClass={styles.recommended_title}
        title='Recommended'
        titleLevel='h2'
      />
      <ArticlesList
        className={styles.recommended_list}
        articles={recommendedArticles}
        error={getRTKError(error)}
        isLoading={isLoading}
        layoutType='tile'
      />
    </div>
  );
};
