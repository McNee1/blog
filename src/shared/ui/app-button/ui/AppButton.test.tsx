import { render, screen } from '@testing-library/react';

import { AppButton } from './AppButton';

import '@testing-library/jest-dom';

describe('Button test', () => {
  test('Test render', () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test class', () => {
    render(<AppButton className='class1'>Test</AppButton>);
    expect(screen.getByText('Test')).toHaveClass('class1');
  });

  test('Test theme', () => {
    render(<AppButton variant='black'>Test</AppButton>);
    expect(screen.getByText('Test')).toHaveClass('black');
  });
});
