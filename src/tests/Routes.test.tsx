import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Header from '../components/header';
import store from '../store';
import { HomePage } from '../pages/home-page/home-page';
import { AboutPage } from '../pages/about-page/about-page';
import { FormPage } from '../pages/form-page/form-page';
import { NotFound } from '../pages/404-page/404-page';

test('renders header component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  expect(getByTestId('header-part')).toBeInTheDocument();
});

test('renders home page component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    </Provider>
  );
  expect(getByTestId('main-page')).toBeInTheDocument();
});

test('renders about page component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/about-us']}>
        <AboutPage />
      </MemoryRouter>
    </Provider>
  );
  expect(getByTestId('about-page')).toBeInTheDocument();
});

test('renders form page component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/form']}>
        <FormPage />
      </MemoryRouter>
    </Provider>
  );
  expect(getByTestId('form-page')).toBeInTheDocument();
});

test('renders not found component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/404']}>
        <NotFound />
      </MemoryRouter>
    </Provider>
  );
  expect(getByTestId('unknown-page')).toBeInTheDocument();
});
