import { FC, lazy } from 'react';

export const NotFoundAsync = lazy<FC>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./NotFound'));
      }, 1000);
    })
);
