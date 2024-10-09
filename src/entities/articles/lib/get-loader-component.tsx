/* eslint-disable import/no-internal-modules */
import { ReactElement } from 'react';

import { ArticleLayoutType } from '@/pages';

import { LgArticleSkeleton } from '../ui/lg-article';
import { MdArticleSkeleton } from '../ui/md-article';
import { SmArticleSkeleton } from '../ui/sm-article';

export const getLoaderComponent = (layoutType: ArticleLayoutType) => {
  const loaderMap: Record<ArticleLayoutType, ReactElement> = {
    card: <LgArticleSkeleton />,
    tile: <MdArticleSkeleton />,
    list: <SmArticleSkeleton />,
  };

  return loaderMap[layoutType];
};
