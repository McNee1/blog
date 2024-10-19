import { ArticleDetail } from '@/entities';
import {
  AddCommentForm,
  ArticleDetailComments,
  ArticleDetailRecommendation,
} from '@/features';

import { ArticleDetailReaction } from '../article-detail-reaction';
import { ArticleWrap } from '../article-wrap';

const ArticleDetailPage = () => {
  return (
    <ArticleWrap
      renderContent={(articleDetail, isLoading, id) => (
        <>
          <ArticleDetail
            isLoading={isLoading}
            data={articleDetail}
          />

          <ArticleDetailReaction articleId={id} />

          <ArticleDetailRecommendation />

          <ArticleDetailComments articleId={id} />

          <AddCommentForm articleId={id} />
        </>
      )}
    />
  );
};

export default ArticleDetailPage;
