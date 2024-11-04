import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Reaction } from './Reaction';

const meta = {
  title: 'shared/Reaction',
  component: Reaction,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Reaction>;

type Story = StoryObj<typeof meta>;

export default meta;

export const BaseReaction: Story = {
  args: {
    onRatingChange: fn(),
  },
};

export const Like: Story = {
  args: {
    onRatingChange: fn(),
    countReaction: 20,
    reaction: 'like',
  },
};

export const Dislike: Story = {
  args: {
    onRatingChange: fn(),
    countReaction: -20,
    reaction: 'dislike',
  },
};
