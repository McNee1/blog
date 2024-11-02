import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';

import {
  articleManagerReducers,
  fetchArticle,
  getArticleError,
  getArticleIsLoading,
  getArticleIsPosted,
  getArticleIsPosting,
  getCanAddArticle,
  PageType,
  postArticle,
  updateArticle,
} from '../../model';
import { ArticleContent } from './article-content';

const initialReducer = { articleManager: articleManagerReducers };

interface ArticleManagerProps {
  pageType: PageType;
}

export const ArticleManager = ({ pageType }: ArticleManagerProps) => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const canAddArticle = useAppSelector(getCanAddArticle);
  const isLoading = useAppSelector(getArticleIsLoading);
  const articleIsAdded = useAppSelector(getArticleIsPosted);
  const isPosting = useAppSelector(getArticleIsPosting);
  const error = useAppSelector(getArticleError);

  const handleAddArticle = () => {
    if (pageType === 'edit') {
      void dispatch(updateArticle());
    }
    if (pageType === 'new') {
      void dispatch(postArticle());
    }
  };

  useEffect(() => {
    void dispatch(fetchArticle(id));
  }, [dispatch, id, pageType]);

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <ArticleContent
        articleIsAdded={articleIsAdded}
        onAddArticle={handleAddArticle}
        canAddArticle={canAddArticle}
        isPosting={isPosting}
        isLoading={isLoading}
        pageType={pageType}
        error={error}
      />
    </AsyncSliceManager>
  );
};
