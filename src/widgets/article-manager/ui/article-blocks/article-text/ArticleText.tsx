import { TextArea } from '@/shared/ui';

import { DeleteArticleBlock } from '@/features';

import { UpdatableBlockKeys, useArticleDictionary } from '../../../model';

interface ArticleTextProps {
  id: string;
  onSetContentBlock: (value: string, id: string, type: UpdatableBlockKeys) => void;
  text: string;
}

export const ArticleText = ({ onSetContentBlock, id, text }: ArticleTextProps) => {
  const { dictionary } = useArticleDictionary();

  return (
    <DeleteArticleBlock
      deleteId={id}
      key={id}
    >
      <TextArea
        onInput={(value) => onSetContentBlock(value, id, 'text')}
        placeholder={dictionary.text}
        value={text}
        autoHeight
      />
    </DeleteArticleBlock>
  );
};
