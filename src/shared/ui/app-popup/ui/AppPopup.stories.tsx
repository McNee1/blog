import type { Meta, StoryObj } from '@storybook/react';

import { AppPopup } from './AppPopup';

const meta = {
  title: 'shared/AppPopup',
  component: AppPopup,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: [
      {
        content: 'profile',
        href: '#',
      },
      {
        content: 'Log out',
        href: '#',
      },
    ],
    bgColor: '#23272f',
  },
} satisfies Meta<typeof AppPopup>;

type Story = StoryObj<typeof meta>;

export default meta;

export const WithArrow: Story = {
  args: {
    reference: 'click',
    isArrow: true,
    popupClass: 'story',
  },
};

export const NoArrow: Story = {
  args: {
    reference: 'click',
    isArrow: false,
  },
};
