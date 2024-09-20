import type { Meta, StoryObj } from '@storybook/react';

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
    onRatingChange: () => false,
  },
};

export const Like: Story = {
  args: {
    onRatingChange: () => false,
    isLiked: true,
  },
};

export const Dislike: Story = {
  args: {
    onRatingChange: () => false,
    isDisliked: true,
  },
};
