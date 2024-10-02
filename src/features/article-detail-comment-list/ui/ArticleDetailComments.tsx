import { useEffect } from 'react';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';

import { CommentList } from '@/entities';

import {
  articleDetailCommentListReducer,
  fetchComments,
  getArticleComments,
  getArticleDetailCommentsError,
  getArticleDetailCommentsIsLoading,
} from '../model';

const initialReducer = { commentsList: articleDetailCommentListReducer };

interface ArticleDetailCommentsProps {
  articleId: string | undefined;
}

export const ArticleDetailComments = ({ articleId }: ArticleDetailCommentsProps) => {
  const dispatch = useAppDispatch();

  const commentList = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleDetailCommentsIsLoading);
  const error = useAppSelector(getArticleDetailCommentsError);

  useEffect(() => {
    if (articleId) void dispatch(fetchComments(articleId));
  }, [dispatch, articleId]);

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <CommentList
        comments={commentList}
        isLoading={isLoading}
        error={error}
      />
    </AsyncSliceManager>
  );
};
