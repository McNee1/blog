import { FC, lazy } from 'react';

export const ArticlesPageAsync = lazy<FC>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        return resolve(import('./ArticlesPage'));
      }, 400);
    })
);
