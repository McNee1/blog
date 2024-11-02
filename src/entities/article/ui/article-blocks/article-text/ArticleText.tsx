import styles from './ArticleText.module.scss';

import { Typography } from '@/shared/ui';

import { TextBlock } from '../../../model';

interface ArticleTextProps {
  content: TextBlock;
}

export const ArticleText = ({ content }: ArticleTextProps) => {
  return (
    <Typography
      className={styles.text_block}
      content={content.text}
    />
  );
};
