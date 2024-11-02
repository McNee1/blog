import { Block } from '@/entities';

import { UpdatableBlockKeys } from '../model';
import { ArticleCode, ArticleImage, ArticleText, ArticleTitle } from '../ui';

export const getBlockComponent = (
  block: Block,
  onSetContentBlock: (value: string, id: string, type: UpdatableBlockKeys) => void
) => {
  switch (block.type) {
    case 'TEXT':
      return (
        <ArticleText
          onSetContentBlock={onSetContentBlock}
          text={block.text}
          key={block.id}
          id={block.id}
        />
      );

    case 'TITLE':
      return (
        <ArticleTitle
          onSetContentBlock={onSetContentBlock}
          title={block.title}
          key={block.id}
          id={block.id}
        />
      );

    case 'IMAGE':
      return (
        <ArticleImage
          onSetContentBlock={onSetContentBlock}
          title={block.title}
          src={block.src}
          key={block.id}
          id={block.id}
        />
      );

    case 'CODE':
      return (
        <ArticleCode
          onSetContentBlock={onSetContentBlock}
          code={block.code}
          key={block.id}
          id={block.id}
        />
      );
  }
};
