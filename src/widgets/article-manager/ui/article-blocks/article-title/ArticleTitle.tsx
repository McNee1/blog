import { TextArea } from '@/shared/ui';

import { DeleteArticleBlock } from '@/features';

import { UpdatableBlockKeys, useArticleDictionary } from '../../../model';

interface ArticleTitleProps {
  id: string;
  onSetContentBlock: (value: string, id: string, type: UpdatableBlockKeys) => void;
  title: string;
}

export const ArticleTitle = ({ id, onSetContentBlock, title }: ArticleTitleProps) => {
  const { dictionary } = useArticleDictionary();

  return (
    <DeleteArticleBlock
      deleteId={id}
      key={id}
    >
      <TextArea
        onInput={(value) => onSetContentBlock(value, id, 'title')}
        placeholder={dictionary.title}
        value={title}
        autoHeight
      />
    </DeleteArticleBlock>
  );
};
