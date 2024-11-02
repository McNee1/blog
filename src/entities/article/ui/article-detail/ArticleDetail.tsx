import { Card, FlexCol } from '@/shared/ui';

import { ArticleType } from '../../model';
import { ArticleIntro } from '../article-intro';
import { ArticleSkeleton } from '../article-skeleton';
import { BlockList } from '../block-list';

interface ArticleDetailProps {
  data: ArticleType | null;
  isLoading: boolean;
}
export const ArticleDetail = ({ data, isLoading }: ArticleDetailProps) => {
  if (isLoading) {
    return <ArticleSkeleton />;
  }

  return (
    <Card
      space={{ paddingX: 'px10', paddingY: 'py16' }}
      as='article'
    >
      <ArticleIntro articleDetail={data} />
      <FlexCol gap='gap6'>
        <BlockList articleDetail={data} />
      </FlexCol>
    </Card>
  );
};
