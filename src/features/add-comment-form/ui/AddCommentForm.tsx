import { memo, useCallback } from 'react';

import {
  AsyncSliceManager,
  ReducersList,
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib';

import { CommentForm } from '@/entities';

import { addCommentAction, addCommentReducer, getCommentForm } from '../model';

export interface AddCommentProps {
  error: string | null;
  isLoading: boolean;
  onPostComment: (text: string) => void;
}

const initialReducer: ReducersList = { addCommentForm: addCommentReducer };

const AddCommentForm = memo(function AddCommentForm({
  isLoading,
  onPostComment,
  error,
}: AddCommentProps) {
  const dispatch = useAppDispatch();
  const text = useAppSelector(getCommentForm);

  const handleChangeField = useCallback(
    (value: string) => {
      dispatch(addCommentAction.setText(value));
    },
    [dispatch]
  );

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <CommentForm
        onSendComment={() => onPostComment(text)}
        onChangeField={handleChangeField}
        isLoading={isLoading}
        textField={text}
        error={error}
      />
    </AsyncSliceManager>
  );
});

export default AddCommentForm;
