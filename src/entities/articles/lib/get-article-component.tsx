/* eslint-disable import/no-internal-modules */
import { ReactElement } from 'react';

import { ArticleType } from '@/entities';
import { ArticleLayoutType } from '@/pages';

import { LgArticle } from '../ui/lg-article';
import { MdArticle } from '../ui/md-article';
import { SmArticle } from '../ui/sm-article';

const articleTypeMap: Record<ArticleLayoutType, (article: ArticleType) => ReactElement> =
  {
    card: (article) => (
      <LgArticle
        article={article}
        key={article.id}
      />
    ),
    tile: (article) => (
      <MdArticle
        article={article}
        key={article.id}
      />
    ),
    list: (article) => (
      <SmArticle
        article={article}
        key={article.id}
      />
    ),
  };

export const getArticleComponent = (
  layoutType: ArticleLayoutType,
  article: ArticleType
): ReactElement => articleTypeMap[layoutType](article);
