import { ArticleDetail } from '@/entities';
import { ArticleDetailRecommendation } from '@/features';
import { CommentsListForm } from '@/widgets';

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

          <CommentsListForm articleId={id} />
        </>
      )}
    />
  );
};

export default ArticleDetailPage;
