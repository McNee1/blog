import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa nihil
        temporibus quos voluptates perferendis alias pariatur odit, nobis non impedit
        adipisci rem. Debitis, iste alias autem architecto quae obcaecati?
      </div>
    ),
  },
};
