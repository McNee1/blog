import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AsyncSliceManager, useAppDispatch } from '@/shared/lib';

import { articlesReducer, initPage } from '../../model';
import { Articles } from '../articles';

const initialReducer = { articles: articlesReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    void dispatch(initPage(searchParams));
  }, [dispatch, searchParams]);

  return (
    <AsyncSliceManager
      removeAfterUnmount={false}
      reducers={initialReducer}
    >
      <Articles />
    </AsyncSliceManager>
  );
};

export default ArticlesPage;
