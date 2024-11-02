import { Typography } from '@/shared/ui';

import { TitleBlock } from '../../../model';

interface ArticleTitleProps {
  content: TitleBlock;
}

export const ArticleTitle = ({ content }: ArticleTitleProps) => {
  return (
    <Typography
      content={content.title}
      as='h3'
    />
  );
};
