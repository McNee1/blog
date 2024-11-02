import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta = {
  title: 'shared/Typography',
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
  },
};

export const Primary: Story = {
  args: {
    content: 'Lorem, ipsum.',
    variant: 'primary',
  },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
  args: {
    content: 'Lorem, ipsum.',
    variant: 'error',
  },
};

export const WeightBold: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    weight: 'bold',
  },
};
export const WeightBolder: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    weight: 'bolder',
  },
};
export const WeightBoldest: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    weight: 'boldest',
  },
};
export const WeightLighter: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    weight: 'lighter',
  },
};

export const SizeXl: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    size: 'xl',
  },
};
export const SizeLg: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    size: 'lg',
  },
};
export const SizeMd: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    size: 'md',
  },
};
export const SizeSm: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet.',
    size: 'sm',
  },
};

export const Center: Story = {
  args: {
    content: 'Lorem, ipsum.',
    align: 'center',
  },
};

export const Right: Story = {
  args: {
    content: 'Lorem, ipsum.',
    align: 'right',
  },
};
