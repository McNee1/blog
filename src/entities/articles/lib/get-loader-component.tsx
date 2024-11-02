import { ArticleLayoutType } from '@/pages';

import { LgArticleSkeleton, MdArticleSkeleton, SmArticleSkeleton } from '../ui';

export const getLoaderComponent = (layoutType: ArticleLayoutType) => {
  switch (layoutType) {
    case 'card':
      return <LgArticleSkeleton />;

    case 'tile':
      return <MdArticleSkeleton />;
    case 'list':
      return <SmArticleSkeleton />;
  }
};
