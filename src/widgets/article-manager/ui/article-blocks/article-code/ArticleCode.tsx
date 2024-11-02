import { TextArea } from '@/shared/ui';

import { DeleteArticleBlock } from '@/features';

import { UpdatableBlockKeys, useArticleDictionary } from '../../../model';

interface ArticleCodeProps {
  className?: string;
  code: string;
  id: string;
  onSetContentBlock: (value: string, id: string, type: UpdatableBlockKeys) => void;
}

export const ArticleCode = ({ onSetContentBlock, id, code }: ArticleCodeProps) => {
  const { dictionary } = useArticleDictionary();

  return (
    <DeleteArticleBlock
      deleteId={id}
      key={id}
    >
      <TextArea
        onInput={(value) => onSetContentBlock(value, id, 'code')}
        placeholder={dictionary.text}
        value={code}
      />
    </DeleteArticleBlock>
  );
};
