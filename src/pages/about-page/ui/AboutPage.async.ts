import { FC, lazy } from 'react';

export const AboutPageAsync = lazy<FC>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        return resolve(import('./AboutPage'));
      }, 1400);
    })
);
