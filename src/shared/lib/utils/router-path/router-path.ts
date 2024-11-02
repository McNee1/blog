import { PATCH_NAME } from '@/shared/constants';
import { PathNameKey } from '@/shared/types';

const getPath = (pathKey: PathNameKey, id?: number | string): string => {
  if (id) {
    return `/${PATCH_NAME[pathKey]}/${id}`;
  }
  return `/${PATCH_NAME[pathKey]}`;
};

const getMainPath = (): string => '/';
const getNewArticlePath = (): string => getPath('NEW_ARTICLE');
const getNotFoundPath = (): string => getPath('NOT_FOUND');
const getAboutPath = (): string => getPath('ABOUT');
const getArticlesPath = (): string => getPath('ARTICLES');
const getAdminPath = (): string => getPath('ADMIN');
const getProfilePath = (id?: string): string => getPath('PROFILE', id);
const getArticleDetailPath = (id: number): string => getPath('ARTICLE_DETAIL', id);
const getEditArticlePath = (id: number): string => getPath('EDIT_ARTICLE', id);
const getUserArticlesPath = (id: number): string => getPath('USER_ARTICLES', id);

export {
  getAboutPath,
  getAdminPath,
  getArticleDetailPath,
  getArticlesPath,
  getEditArticlePath,
  getMainPath,
  getNewArticlePath,
  getNotFoundPath,
  getProfilePath,
  getUserArticlesPath,
};
