import { Block } from '@/entities';

import { BlockTypes } from '../model';

export const createBlock = (block: BlockTypes, articleLength: number): Block => {
  const blockId = String(articleLength + 1);

  switch (block) {
    case 'CODE':
      return {
        type: 'CODE',
        code: '',
        id: blockId,
      };

    case 'TEXT':
      return {
        type: 'TEXT',
        text: '',
        id: blockId,
      };
    case 'TITLE':
      return {
        type: 'TITLE',
        title: '',
        id: blockId,
      };
    case 'IMAGE':
      return {
        src: '',
        type: 'IMAGE',
        title: '',
        id: blockId,
      };
  }
};
