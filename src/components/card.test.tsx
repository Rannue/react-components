import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { products } from '../assets/data';
import { Cards } from './cards';

test('Product price', () => {
  function randomInteger(min: number, max: number): number {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  render(<Cards {...products} />);
  const randomCard = products[randomInteger(0, products.length - 1)];
  const productPrice = screen.getByText(`${randomCard.price}$`);
  expect(productPrice).toBeInTheDocument();
});
