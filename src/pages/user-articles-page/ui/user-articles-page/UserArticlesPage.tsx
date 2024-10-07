import { useParams } from 'react-router-dom';

import styles from './UserArticlesPage.module.scss';

import { Card, Typography } from '@/shared/ui';

import { PageManager } from '@/widgets';

import { MyArticles } from '../my-articles';

const UserArticlesPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageManager>
      <Card className={styles.title_wrap}>
        <Typography
          titleClass={styles.title}
          title='My article List'
        />
      </Card>
      <MyArticles id={id} />
    </PageManager>
  );
};

export default UserArticlesPage;
