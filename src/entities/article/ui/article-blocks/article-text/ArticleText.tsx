import styles from './ArticleText.module.scss';

import { Typography } from '@/shared/ui';

import { TextBlock } from '../../../model';

interface ArticleTextProps {
  content: TextBlock;
}

export const ArticleText = ({ content }: ArticleTextProps) => {
  return (
    <Typography
      textClass={styles.text_block}
      text={content.text}
    />
  );
};
