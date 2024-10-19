import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { CodeBlock } from '../../../model';
import { ArticleCode } from './ArticleCode';

const MOCK_CODE: CodeBlock = {
  id: '4',
  type: 'CODE',
  code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};

const meta = {
  title: 'article/ArticleCode',
  component: ArticleCode,
} satisfies Meta<typeof ArticleCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    content: MOCK_CODE,
  },
};

export const Dark: Story = {
  args: {
    content: MOCK_CODE,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
