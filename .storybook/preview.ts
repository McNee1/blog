import { Preview } from '@storybook/react';

import RouterDecorator from '../src/shared/config/storybook/RouterDecorator';

import StyleDecorator from '../src/shared/config/storybook/StyleDecorator';

const preview: Preview = {
  parameters: {
    actions: {},

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, StyleDecorator],
};

export default preview;
