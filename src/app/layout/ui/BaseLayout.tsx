import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './BaseLayout.module.scss';

import { useAppDispatch } from '@/shared/lib';
import { Preloader } from '@/shared/ui';

import { userAction } from '@/entities';
import { Header, Sidebar } from '@/widgets';

export const BaseLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userAction.initAuthUser());
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <div className={styles.content_wrap}>
        <Header />

        {/* <main className={styles.main}> */}
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
        {/* </main> */}
      </div>
    </>
  );
};
