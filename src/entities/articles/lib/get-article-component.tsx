import { ArticleType } from '@/entities';
import { ArticleLayoutType } from '@/pages';

import { LgArticle, MdArticle, SmArticle } from '../ui';

export const getArticleComponent = (
  layoutType: ArticleLayoutType,
  article: ArticleType
) => {
  switch (layoutType) {
    case 'card':
      return (
        <LgArticle
          article={article}
          key={article.id}
        />
      );
    case 'tile':
      return (
        <MdArticle
          article={article}
          key={article.id}
        />
      );
    case 'list':
      return (
        <SmArticle
          article={article}
          key={article.id}
        />
      );
  }
};
