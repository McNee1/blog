import { createBrowserRouter } from 'react-router-dom';

import {
  getAboutPath,
  getArticleDetailPath,
  getArticlesPath,
  getEditArticlePath,
  getMainPath,
  getNewArticlePath,
  getNotFoundPath,
  getProfilePath,
  getUserArticlesPath,
  getUsersPath,
} from '@/shared/lib';

import { allowedRolesForPage } from '@/entities';
import {
  AboutPage,
  ArticleDetailPage,
  ArticlesPage,
  CreateArticlePage,
  EditArticlePage,
  MainPage,
  NotFound,
  ProfilePage,
  UserArticlesPage,
  UsersPage,
} from '@/pages';

import { BaseLayout } from '../../../../layout';
import { PrivateRoute } from '../private-route';

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,

      children: [
        {
          path: getMainPath(),
          element: <MainPage />,
        },
        {
          path: getProfilePath(':id'),

          element: (
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          ),
        },
        {
          path: getArticlesPath(),
          element: <ArticlesPage />,
        },
        {
          path: getArticleDetailPath(':id'),
          element: <ArticleDetailPage />,
        },
        {
          path: getAboutPath(),
          element: <AboutPage />,
        },

        {
          path: getEditArticlePath(':id'),
          element: (
            <PrivateRoute>
              <EditArticlePage />
            </PrivateRoute>
          ),
        },
        {
          path: getNewArticlePath(),
          element: (
            <PrivateRoute>
              <CreateArticlePage />
            </PrivateRoute>
          ),
        },
        {
          path: getUsersPath(),
          element: (
            <PrivateRoute requireRole={allowedRolesForPage.USERS}>
              <UsersPage />
            </PrivateRoute>
          ),
        },
        {
          path: getUserArticlesPath(':id'),
          element: (
            <PrivateRoute>
              <UserArticlesPage />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: getNotFoundPath(),
      element: <NotFound />,
    },
  ]);

  return router;
};
