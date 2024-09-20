import { createSelector } from '@reduxjs/toolkit';

import { getArticleData } from '../get-article-data';

export const getArticleBlocks = createSelector(
  getArticleData,
  (article) => article?.blocks ?? []
);
