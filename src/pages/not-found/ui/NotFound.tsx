import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  const error: unknown = useRouteError();

  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className={styles.error_wrap}>
      <h1 className={styles.title}>Oops!</h1>
      <h6 className={styles.subtitle}>
        Sorry, an unexpected error has occurred:
        <div className={styles.errors}>{errorMessage}</div>
      </h6>
    </div>
  );
};
export default NotFound;
