import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from './AppButton';

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
    variant: 'blue',
    children: 'text',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    children: 'text',
  },
};

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'text',
  },
};
export const Black: Story = {
  args: {
    variant: 'black',
    children: 'text',
  },
};
export const Red: Story = {
  args: {
    variant: 'red',
    children: 'text',
  },
};

export const OutlineRed: Story = {
  args: {
    variant: 'outline-red',
    children: 'text',
  },
};

export const OutlineGreen: Story = {
  args: {
    variant: 'outline-green',
    children: 'text',
  },
};

export const OutlineBlack: Story = {
  args: {
    variant: 'outline-black',
    children: 'text',
  },
};

export const OutlineGray: Story = {
  args: {
    variant: 'outline-gray',
    children: 'text',
  },
};

export const OutlineBlue: Story = {
  args: {
    variant: 'outline-blue',
    children: 'text',
  },
};

export const Circle: Story = {
  args: {
    round: 'full',
    variant: 'outline-gray',
    size: 'lg',
    children: 'text',
  },
};
