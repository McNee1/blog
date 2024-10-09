import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { FORMAT_DATE_OPT, Theme } from '@/shared/constants';

import { Meta, StoryObj } from '@storybook/react';

import { DateView } from './DateView';

const meta = {
  title: 'shared/DateView',
  component: DateView,
} satisfies Meta<typeof DateView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '1721916296917',
    options: { dateStyle: 'medium' },
  },
};

export const Dark: Story = {
  args: {
    date: '1721916296917',
    options: FORMAT_DATE_OPT,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
