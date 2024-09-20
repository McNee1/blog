import { Block } from '@/entities';
import { createSelector } from '@reduxjs/toolkit';

import { getArticleBlocks } from '../get-article-blocks';
import { getArticleData } from '../get-article-data';

const isValidArticleBlock = (articleBlocs: Block[]) => {
  return articleBlocs.every((block) => {
    if (block.type === 'CODE') {
      return block.code.length;
    }
    if (block.type === 'TEXT') {
      return block.text.length;
    }
    if (block.type === 'TITLE') {
      return block.title.length;
    }
    if (block.type === 'IMAGE') {
      return block.src.length && block.title.length;
    }
  });
};

export const getCanAddArticle = createSelector(
  getArticleData,
  getArticleBlocks,
  (articleInfo, articleBlocs) => {
    if (
      articleInfo?.title &&
      articleInfo.type?.length &&
      articleBlocs.length >= 1 &&
      isValidArticleBlock(articleBlocs)
    ) {
      return true;
    }

    return false;
  }
);
