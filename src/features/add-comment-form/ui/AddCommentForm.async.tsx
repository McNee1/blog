import { FC, lazy, Suspense } from 'react';

import { AddCommentFormProps } from './AddCommentForm';

const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => import('./AddCommentForm')
);

export const AddCommentFormSuspense = ({ articleId }: AddCommentFormProps) => (
  <Suspense fallback='loading...'>
    <AddCommentFormAsync articleId={articleId} />
  </Suspense>
);
