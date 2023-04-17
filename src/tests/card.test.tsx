import { render, screen } from '@testing-library/react';
import { Cards } from '../pages/home-page/components/cards';
import React from 'react';

describe('Cards component', () => {
  it('should render Spinner component while loading', () => {
    const mockUseSelector = jest.fn();
    mockUseSelector.mockReturnValue('mocked search text');
    const mockUseGetCardQuery = jest.fn();
    mockUseGetCardQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isSuccess: false,
    });

    jest.mock('react-redux', () => ({
      useSelector: mockUseSelector,
    }));

    jest.mock('./api', () => ({
      useGetCardQuery: mockUseGetCardQuery,
    }));

    render(<Cards />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});
