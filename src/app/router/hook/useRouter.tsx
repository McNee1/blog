import { createBrowserRouter } from 'react-router-dom';

import {
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
} from '@/shared/lib';

import { allowedRolesForPage } from '@/entities';
import {
  AboutPage,
  AdminPage,
  ArticleDetailPage,
  ArticlesPage,
  CreateArticlePage,
  EditArticlePage,
  MainPage,
  NotFound,
  ProfilePage,
  UserArticlesPage,
} from '@/pages';

import { BaseLayout } from '../../layout';
import { createRouteElement } from '../lib';

const adminRoutes = [
  {
    path: getAdminPath(),
    element: createRouteElement(<AdminPage />, true, allowedRolesForPage.ADMIN),
  },
];

const privateRoutes = [
  {
    path: getProfilePath(':id'),

    element: createRouteElement(<ProfilePage />, true),
  },
  {
    path: getEditArticlePath(':id'),
    element: createRouteElement(<EditArticlePage />, true),
  },
  {
    path: getNewArticlePath(),
    element: createRouteElement(<CreateArticlePage />, true),
  },

  {
    path: getUserArticlesPath(':id'),
    element: createRouteElement(<UserArticlesPage />, true),
  },
];

const routerConfig = [
  {
    element: <BaseLayout />,

    children: [
      {
        path: getMainPath(),
        element: createRouteElement(<MainPage />),
      },

      {
        path: getArticlesPath(),
        element: createRouteElement(<ArticlesPage />),
      },
      {
        path: getArticleDetailPath(':id'),
        element: createRouteElement(<ArticleDetailPage />),
      },
      {
        path: getAboutPath(),
        element: createRouteElement(<AboutPage />),
      },

      ...adminRoutes,
      ...privateRoutes,
    ],
  },
  {
    path: getNotFoundPath(),
    element: <NotFound />,
  },
];

export const useRouter = () => {
  const router = createBrowserRouter(routerConfig);

  return router;
};
