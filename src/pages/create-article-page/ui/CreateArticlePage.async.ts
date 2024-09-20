import { FC, lazy } from 'react';

export const CreateArticlePageAsync = lazy<FC>(() => import('./CreateArticlePage'));
