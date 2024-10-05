/* eslint-disable import/no-internal-modules */
import { ReactElement } from 'react';

import { ArticleType } from '@/entities';
import { ArticleLayoutType } from '@/pages';

import { LgArticle } from '../../ui/lg-article';
import { MdArticle } from '../../ui/md-article';
import { SmArticle } from '../../ui/sm-article';

const articleTypeMap: Record<ArticleLayoutType, (article: ArticleType) => ReactElement> =
  {
    card: (article) => <LgArticle article={article} />,
    tile: (article) => <MdArticle article={article} />,
    list: (article) => <SmArticle article={article} />,
  };

export const getArticleComponent = (
  layoutType: ArticleLayoutType,
  article: ArticleType
): ReactElement => articleTypeMap[layoutType](article);
