import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta = {
  title: 'shared/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextArea>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    border: true,
    editable: true,
  },
};

export const NotEditable: Story = {
  args: {
    value: 'text',
    border: false,
    editable: false,
  },
};
