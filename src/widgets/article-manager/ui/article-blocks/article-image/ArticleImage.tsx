import { TextArea } from '@/shared/ui';

import { DeleteArticleBlock } from '@/features';

import { UpdatableBlockKeys, useArticleDictionary } from '../../../model';

interface ArticleImageProps {
  id: string;
  onSetContentBlock: (value: string, id: string, type: UpdatableBlockKeys) => void;
  src: string;
  title: string;
}

export const ArticleImage = ({
  id,
  onSetContentBlock,
  title,
  src,
}: ArticleImageProps) => {
  const { dictionary } = useArticleDictionary();

  return (
    <DeleteArticleBlock
      deleteId={id}
      key={id}
    >
      <TextArea
        onInput={(value) => onSetContentBlock(value, id, 'src')}
        placeholder={dictionary.imageLink}
        value={src}
      />
      <TextArea
        onInput={(value) => onSetContentBlock(value, id, 'title')}
        placeholder={dictionary.description}
        value={title}
      />
    </DeleteArticleBlock>
  );
};
