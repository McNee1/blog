import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'shared/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    children: 'primary badge',
    type: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'success badge',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'warning badge',
    type: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'info badge',
    type: 'info',
  },
};
