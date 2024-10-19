import { getUserData } from '@/entities';
import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetail } from '../get-article-detail';

export const IsArticleOwner = createSelector(
  getUserData,
  getArticleDetail,
  (authData, articleData) => {
    if (!authData || !articleData) {
      return false;
    }
    return authData.id === articleData.userId;
  }
);
