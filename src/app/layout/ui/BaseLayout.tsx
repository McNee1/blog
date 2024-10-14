import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './BaseLayout.module.scss';

import { Preloader } from '@/shared/ui';

import { Header, Sidebar } from '@/widgets';

export const BaseLayout = () => {
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
