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
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit amet.',
    theme: 'primary',
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Primary: Story = {
  args: {
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit amet.',
    theme: 'primary',
  },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
  args: {
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit amet.',
    theme: 'error',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem, ipsum.',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
  },
};

export const H1: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    titleLevel: 'h1',
  },
};

export const H2: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    titleLevel: 'h2',
  },
};
export const H3: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    titleLevel: 'h3',
  },
};

export const Center: Story = {
  args: {
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit amet.',
    align: 'center',
  },
};

export const Right: Story = {
  args: {
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit amet.',
    align: 'right',
  },
};

export const Left: Story = {
  args: {
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit amet.',
    align: 'left',
  },
};
