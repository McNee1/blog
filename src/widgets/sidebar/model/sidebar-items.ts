import about from '@/shared/assets/icons/about.svg';
import article from '@/shared/assets/icons/article.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import profile from '@/shared/assets/icons/profile.svg';
import { PathName } from '@/shared/constants';
import { RoutePath } from '@/shared/lib';

import { allowedRolesForPage, Role } from '@/entities';

export interface SidebarItemsType {
  icon: string;
  isAuth?: boolean;
  name: (typeof PathName)[keyof typeof PathName];
  path: string;
  requiredRole?: Role[];
}

export const sidebarItems: SidebarItemsType[] = [
  { name: 'main', path: RoutePath.getMainPath(), icon: homeIcon },
  { name: 'articles', path: RoutePath.getArticlesPath(), icon: article },
  { name: 'profile', path: '', icon: profile, isAuth: true },
  {
    name: 'users',
    path: RoutePath.getUsersPath(),
    icon: article,
    isAuth: true,
    requiredRole: allowedRolesForPage.USERS,
  },
  { name: 'about', path: RoutePath.getAboutPath(), icon: about },
];
