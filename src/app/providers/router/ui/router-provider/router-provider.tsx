import { createBrowserRouter } from 'react-router-dom';

import { PathName } from '@/shared/constants';
import {
  getAboutPath,
  getArticleDetailPath,
  getArticlesPath,
  getEditArticlePath,
  getMainPath,
  getNewArticlePath,
  getNotFoundPath,
  getProfilePath,
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
          path: PathName.USERS,
          element: (
            <PrivateRoute requireRole={allowedRolesForPage.USERS}>
              <UsersPage />
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
