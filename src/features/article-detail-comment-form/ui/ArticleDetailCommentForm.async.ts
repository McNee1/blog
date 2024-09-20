import { FC, lazy } from 'react';

import { ArticleDetailCommentFormProps } from './ArticleDetailCommentForm';

export const ArticleDetailCommentFormAsync = lazy<FC<ArticleDetailCommentFormProps>>(
  () => import('./ArticleDetailCommentForm')
);
