import aboutIcon from '@/shared/assets/icons/about.svg';
import articleIcon from '@/shared/assets/icons/article.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import profileIcon from '@/shared/assets/icons/profile.svg';
import usersIcon from '@/shared/assets/icons/users.svg';
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
  { name: 'articles', path: () => getArticlesPath(), icon: articleIcon },
  {
    name: 'profile',
    path: (id) => getProfilePath(id),
    icon: profileIcon,
    isAuth: true,
  },
  {
    name: 'users',
    path: () => getUsersPath(),
    icon: usersIcon,
    isAuth: true,
    requiredRole: allowedRolesForPage.USERS,
  },
  { name: 'about', path: () => getAboutPath(), icon: aboutIcon },
];
