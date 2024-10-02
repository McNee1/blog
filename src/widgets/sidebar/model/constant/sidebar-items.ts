import about from '@/shared/assets/icons/about.svg';
import article from '@/shared/assets/icons/article.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import profile from '@/shared/assets/icons/profile.svg';
import { PathName } from '@/shared/constants';
import {
  getAboutPath,
  getArticlesPath,
  getMainPath,
  getProfilePath,
  getUsersPath,
} from '@/shared/lib';

import { allowedRolesForPage, Role } from '@/entities';

export interface SidebarItemsType {
  icon: string;
  isAuth?: boolean;
  name: (typeof PathName)[keyof typeof PathName];
  path: (id?: string) => string;
  requiredRole?: Role[];
}

export const sidebarItems: SidebarItemsType[] = [
  { name: 'main', path: () => getMainPath(), icon: homeIcon },
  { name: 'articles', path: () => getArticlesPath(), icon: article },
  {
    name: 'profile',
    path: (id) => getProfilePath(id),
    icon: profile,
    isAuth: true,
  },
  {
    name: 'users',
    path: () => getUsersPath(),
    icon: article,
    isAuth: true,
    requiredRole: allowedRolesForPage.USERS,
  },
  { name: 'about', path: () => getAboutPath(), icon: about },
];
