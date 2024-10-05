import { FC, lazy } from 'react';

export const UserArticlesPageAsync = lazy<FC>(() => import('./UserArticlesPage'));
