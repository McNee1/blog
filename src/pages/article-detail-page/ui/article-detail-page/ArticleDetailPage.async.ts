import { FC, lazy } from 'react';

export const ArticleDetailPageAsync = lazy<FC>(() => import('./ArticleDetailPage'));
