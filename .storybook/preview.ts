import { Preview } from '@storybook/react';

import RouterDecorator from '../src/shared/config/storybook/RouterDecorator';

import StyleDecorator from '../src/shared/config/storybook/StyleDecorator';
import 'loki/configure-react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
