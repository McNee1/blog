import { FC, lazy, Suspense } from 'react';

import { AddCommentProps } from './AddCommentForm';

const AddCommentAsync = lazy<FC<AddCommentProps>>(() => import('./AddCommentForm'));

export const AddCommentSuspense = (props: AddCommentProps) => (
  <Suspense fallback='loading...'>
    <AddCommentAsync {...props} />
  </Suspense>
);
