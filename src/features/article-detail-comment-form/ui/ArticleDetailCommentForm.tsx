import { useCallback } from 'react';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';

import { CommentForm, getUserData } from '@/entities';
import { fetchComments } from '@/features';

import {
  articleDetailCommentFormAction,
  articleDetailCommentFormReducer,
  getCommentForm,
  getCommentFormError,
  getCommentFormIsLoading,
  postComment,
} from '../model';

const initialReducer = articleDetailCommentFormReducer;

export interface ArticleDetailCommentFormProps {
  articleId: string | undefined;
}

const ArticleDetailCommentForm = ({ articleId }: ArticleDetailCommentFormProps) => {
  const dispatch = useAppDispatch();

  const text = useAppSelector(getCommentForm);
  const error = useAppSelector(getCommentFormError);
  const isLoading = useAppSelector(getCommentFormIsLoading);

  const authId = useAppSelector(getUserData)?.id;

  const handleChangeField = useCallback(
    (value: string) => {
      dispatch(articleDetailCommentFormAction.setText(value));
    },
    [dispatch]
  );

  const handlePostComment = useCallback(() => {
    if (!articleId || !authId) return;

    void dispatch(
      postComment({
        articleId,
        date: new Date().getTime().toString(),
        text,
        userId: authId,
      })
    )
      .then((r) => {
        if (r.meta.requestStatus === 'fulfilled') {
          handleChangeField('');
          void dispatch(fetchComments(articleId));
        }
      })
      .catch((e) => console.log(e));
  }, [articleId, authId, dispatch, handleChangeField, text]);

  return (
    <AsyncSliceManager
      name='articleCommentForm'
      reducer={initialReducer}
    >
      <CommentForm
        onChangeField={handleChangeField}
        onSendComment={handlePostComment}
        isLoading={isLoading}
        textField={text}
        error={error}
      />
    </AsyncSliceManager>
  );
};

export default ArticleDetailCommentForm;
