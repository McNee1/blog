import { createBrowserRouter } from 'react-router-dom';

import { PathName } from '@/shared/constants';
import { RoutePath } from '@/shared/lib';

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
          path: RoutePath.getMainPath(),
          element: <MainPage />,
        },
        {
          path: RoutePath.getProfilePath(':id'),

          element: (
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          ),
        },
        {
          path: RoutePath.getArticlesPath(),
          element: <ArticlesPage />,
        },
        {
          path: RoutePath.getArticleDetailPath(':id'),
          element: <ArticleDetailPage />,
        },
        {
          path: RoutePath.getAboutPath(),
          element: <AboutPage />,
        },

        {
          path: RoutePath.getEditArticlePath(':id'),
          element: (
            <PrivateRoute>
              <EditArticlePage />
            </PrivateRoute>
          ),
        },
        {
          path: RoutePath.getNewArticlePath(),
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
      path: RoutePath.getNotFoundPath(),
      element: <NotFound />,
    },
  ]);

  return router;
};
