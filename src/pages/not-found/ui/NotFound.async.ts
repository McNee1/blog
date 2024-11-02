import { FC, lazy } from 'react';

export const NotFoundAsync = lazy<FC>(() => import('./NotFound'));
