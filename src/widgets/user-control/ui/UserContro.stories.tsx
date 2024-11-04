import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { User } from '@/entities';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { UserControl } from './UserControl';

const MOCK_DATA = {
  id: '2',
  username: 'Mike',
  password: '123',
  email: 'test1@t.tt',
  role: 'moderator',
  avatar:
    'https://avatars.mds.yandex.net/get-shedevrum/11425623/img_b741a033f00f11eeb7f0ba0d8cad0506/orig',
  jsonSetting: {
    theme: 'light',
    foo: '22',
  },
} as User;

const meta = {
  title: 'widgets/UserControl',
  component: UserControl,
} satisfies Meta<typeof UserControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: MOCK_DATA,
    onChangeRole: fn(),
    onOpenDeleteModal: fn(),
  },
};

Base.decorators = [ThemeDecorator(Theme.LIGHT)];
