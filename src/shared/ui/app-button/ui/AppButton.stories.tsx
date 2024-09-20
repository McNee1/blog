import type { Meta, StoryObj } from '@storybook/react';

import { AppButton, ThemeButton } from './AppButton';

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    bgColor: { control: 'color' },
  },
} satisfies Meta<typeof AppButton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Blue: Story = {
  args: {
    theme: ThemeButton.BLUE,
    children: 'text',
  },
};

export const Gray: Story = {
  args: {
    theme: ThemeButton.GRAY,
    children: 'text',
  },
};

export const Green: Story = {
  args: {
    theme: ThemeButton.GREEN,
    children: 'text',
  },
};
export const Black: Story = {
  args: {
    theme: ThemeButton.BLACK,
    children: 'text',
  },
};
export const Red: Story = {
  args: {
    theme: ThemeButton.RED,
    children: 'text',
  },
};

export const Purple: Story = {
  args: {
    theme: ThemeButton.PURPLE,
    children: 'text',
  },
};

export const OutlineRed: Story = {
  args: {
    theme: ThemeButton.OUTLINE_RED,
    children: 'text',
  },
};
export const OutlinePurple: Story = {
  args: {
    theme: ThemeButton.OUTLINE_PURPLE,
    children: 'text',
  },
};
export const OutlineGreen: Story = {
  args: {
    theme: ThemeButton.OUTLINE_GREEN,
    children: 'text',
  },
};

export const OutlineBlack: Story = {
  args: {
    theme: ThemeButton.OUTLINE_BLACK,
    children: 'text',
  },
};

export const OutlineGray: Story = {
  args: {
    theme: ThemeButton.OUTLINE_GRAY,
    children: 'text',
  },
};

export const OutlineBlue: Story = {
  args: {
    theme: ThemeButton.OUTLINE_BLUE,
    children: 'text',
  },
};

export const Circle: Story = {
  args: {
    round: 'full',
    theme: ThemeButton.GRAY,
    size: 'lg',
    children: 'text',
  },
};
