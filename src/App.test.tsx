import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App routing', () => {
  test('renders home component on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('renders about component on about route', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('renders not found component on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('unknown-page')).toBeInTheDocument();
  });
});
