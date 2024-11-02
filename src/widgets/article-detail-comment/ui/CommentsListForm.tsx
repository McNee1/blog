import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AsyncSliceManager,
  ReducersList,
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib';
import { Typography } from '@/shared/ui';

import { CommentList } from '@/entities';
import { AddCommentForm } from '@/features';

import {
  CommentsListFormReducer,
  fetchComments,
  getCommentList,
  getCommentListError,
  getCommentListErrorPost,
  getCommentListIsLoading,
  getCommentListIsPosting,
  postCommentById,
} from '../model';

const initialReducer: ReducersList = {
  commentsListForm: CommentsListFormReducer,
};

export const CommentsListForm = ({ articleId }: { articleId: string | undefined }) => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();

  const commentList = useAppSelector(getCommentList);

  const isPosting = useAppSelector(getCommentListIsPosting);
  const errorPost = useAppSelector(getCommentListErrorPost);

  const error = useAppSelector(getCommentListError);
  const isLoading = useAppSelector(getCommentListIsLoading);

  useEffect(() => {
    if (articleId) {
      void dispatch(fetchComments(articleId));
    }
  }, [dispatch, articleId]);

  const handlePostComment = (commentText: string) => {
    void dispatch(postCommentById({ text: commentText }));
  };

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <section>
        <Typography
          space={{ marginButton: 'mb6' }}
          content={t('Comments')}
          size='md'
          as='h3'
        />

        <CommentList
          comments={commentList}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <AddCommentForm
        onPostComment={handlePostComment}
        isLoading={isPosting}
        error={errorPost}
      />
    </AsyncSliceManager>
  );
};
