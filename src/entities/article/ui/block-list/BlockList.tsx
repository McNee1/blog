import { useCallback } from 'react';

import { ArticleType, Block } from '../../model';
import { ArticleCode, ArticleImage, ArticleText, ArticleTitle } from '../article-blocks';

interface BlockListProps {
  articleDetail: ArticleType | null;
}

export const BlockList = ({ articleDetail }: BlockListProps) => {
  const renderBlock = useCallback((block: Block) => {
    switch (block.type) {
      case 'TEXT':
        return (
          <ArticleText
            content={block}
            key={block.id}
          />
        );

      case 'TITLE':
        return (
          <ArticleTitle
            content={block}
            key={block.id}
          />
        );

      case 'IMAGE':
        return (
          <ArticleImage
            content={block}
            key={block.id}
          />
        );

      case 'CODE':
        return (
          <ArticleCode
            content={block}
            key={block.id}
          />
        );
    }
  }, []);

  return <>{articleDetail?.blocks?.map(renderBlock)}</>;
};
