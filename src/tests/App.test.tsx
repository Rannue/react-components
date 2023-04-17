import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import App from '../App';

const mockStore = configureStore([]);

describe('App', () => {
  it('should render header and main sections', () => {
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const header = getByRole('banner');
    const main = getByRole('main');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
