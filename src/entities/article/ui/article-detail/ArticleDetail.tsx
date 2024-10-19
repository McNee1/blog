import { Card, FlexGroup } from '@/shared/ui';

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
    <Card tagName='article'>
      <FlexGroup
        direction='col'
        gap='gap6'
      >
        <ArticleIntro articleDetail={data} />
        <BlockList articleDetail={data} />
      </FlexGroup>
    </Card>
  );
};
