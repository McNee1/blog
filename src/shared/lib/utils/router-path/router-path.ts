import { PathName } from '@/shared/constants';
import { PathNameKey } from '@/shared/types';

const getPath = (pathKey: PathNameKey, id?: string): string => {
  if (id) {
    return `/${PathName[pathKey]}/${id}`;
  }
  return `/${PathName[pathKey]}`;
};

const getMainPath = (): string => '/';
const getNewArticlePath = (): string => getPath('NEW_ARTICLE');
const getNotFoundPath = (): string => getPath('NOT_FOUND');
const getAboutPath = (): string => getPath('ABOUT');
const getArticlesPath = (): string => getPath('ARTICLES');
const getUsersPath = (): string => getPath('USERS');
const getProfilePath = (id?: string): string => getPath('PROFILE', id);
const getArticleDetailPath = (id: string): string => getPath('ARTICLE_DETAIL', id);
const getEditArticlePath = (id: string): string => getPath('EDIT_ARTICLE', id);

export {
  getAboutPath,
  getArticleDetailPath,
  getArticlesPath,
  getEditArticlePath,
  getMainPath,
  getNewArticlePath,
  getNotFoundPath,
  getProfilePath,
  getUsersPath,
};
