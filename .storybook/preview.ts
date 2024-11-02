import { Preview } from '@storybook/react';

import RouterDecorator from '../src/shared/config/storybook/RouterDecorator';

import StyleDecorator from '../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../src/shared/constants/theme';

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT), StyleDecorator],
  },
};

export default preview;
