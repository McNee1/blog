import { useParams } from 'react-router-dom';

import { ArticleDetail } from '@/entities';
import {
  AddCommentForm,
  ArticleDetailComments,
  ArticleDetailReaction,
  ArticleDetailRecommendation,
} from '@/features';
import { PageManager } from '@/widgets';

import { ActionButtons } from '../action-buttons';

const ArticleDetailPage = () => {
  const { id } = useParams();

  return (
    <PageManager
      direction='col'
      gap='gap8'
      width='xl'
    >
      <ActionButtons articleId={id} />

      <ArticleDetail articleId={id} />

      <ArticleDetailReaction articleId={id} />

      <ArticleDetailRecommendation />

      <ArticleDetailComments articleId={id} />

      <AddCommentForm articleId={id} />
    </PageManager>
  );
};

export default ArticleDetailPage;
