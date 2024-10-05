import { useParams } from 'react-router-dom';

import styles from './UserArticlesPage.module.scss';

import { AsyncSliceManager } from '@/shared/lib';
import { Typography } from '@/shared/ui';

import { PageManager } from '@/widgets';

import { userArticlesReducer } from '../../model';
import { MyArticles } from '../my-articles';

const initialReducer = { userArticles: userArticlesReducer };

const UserArticlesPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageManager>
      <AsyncSliceManager reducers={initialReducer}>
        <Typography
          titleClass={styles.title}
          title='my article List'
        />
        <MyArticles id={id} />
      </AsyncSliceManager>
    </PageManager>
  );
};

export default UserArticlesPage;
