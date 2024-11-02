import type { Meta, StoryObj } from '@storybook/react';

import MOCK_IMG from '@/shared/assets/storybook/Type-Safe-Module-Mocking.jpg';

import { AppImage } from './AppImage';

const meta = {
  title: 'shared/AppImage',
  component: AppImage,

  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AppImage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    src: MOCK_IMG,
    styles: {
      width: '100%',
      height: '200px',
    },
  },
};

export const Center: Story = {
  args: {
    src: MOCK_IMG,
    size: 100,
    center: true,
  },
};

export const FullRounded: Story = {
  args: {
    src: MOCK_IMG,
    size: 100,
    round: 'full',
  },
};

export const SmRounded: Story = {
  args: {
    src: MOCK_IMG,
    size: 100,
    round: 'sm',
  },
};
