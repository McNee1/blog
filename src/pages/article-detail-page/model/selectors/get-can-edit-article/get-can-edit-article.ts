import { getArticleDetail, getUserData } from '@/entities';
import { createSelector } from '@reduxjs/toolkit';

export const getCanEditArticle = createSelector(
  getUserData,
  getArticleDetail,
  (authData, articleData) => {
    if (!authData || !articleData) {
      return false;
    }
    return authData.id === articleData.userId;
  }
);
