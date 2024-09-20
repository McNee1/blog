import { Typography } from '@/shared/ui';

import type { TitleBlock } from '../../../../model';

interface ArticleTitleProps {
  content: TitleBlock;
}

export const ArticleTitle = ({ content }: ArticleTitleProps) => {
  return (
    <Typography
      title={content.title}
      titleLevel='h3'
    />
  );
};
