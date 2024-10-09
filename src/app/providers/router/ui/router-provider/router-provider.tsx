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
          path: getAdminPath(),
          element: (
            <PrivateRoute requireRole={allowedRolesForPage.ADMIN}>
              <AdminPage />
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
