import styles from './TitleText.module.scss';

import { Typography } from '@/shared/ui';

export const TitleText = ({ title }: { title: string }) => {
  return (
    <Typography
      textClass={styles.title}
      textWeight='normal'
      textSize='md'
      text={title}
    />
  );
};
