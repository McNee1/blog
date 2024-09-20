import { ThemeProvider } from '@/app/providers';

import { Theme } from '@/shared/constants';

import { StoryFn } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider>
    <body className={`app ${theme}`}>
      <StoryComponent />
    </body>
  </ThemeProvider>
);
