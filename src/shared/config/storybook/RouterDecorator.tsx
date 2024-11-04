import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Decorator } from '@storybook/react';

const RouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route
          element={<Story />}
          path='/*'
        />
      </Routes>
    </MemoryRouter>
  );
};

export default RouterDecorator;
