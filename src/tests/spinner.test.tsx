import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../pages/home-page/components/spinner';

describe('Spinner component', () => {
  it('renders correctly', () => {
    render(<Spinner />);
    const loadingDots = screen.getByTestId('spinner');
    expect(loadingDots).toBeInTheDocument();
  });
});
