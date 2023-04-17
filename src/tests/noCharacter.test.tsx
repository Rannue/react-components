import React from 'react';
import { render } from '@testing-library/react';
import { NoCharacter } from '../pages/home-page/components/noCharacters';

describe('NoCharacter', () => {
  it('should display no results message', () => {
    const { getByText } = render(<NoCharacter searchText="test" />);
    const message = getByText(`No results found for "test"`);
    expect(message).toBeInTheDocument();
  });

  it('should display Morty image', () => {
    const { getByAltText } = render(<NoCharacter searchText="test" />);
    const image = getByAltText('Morty');
    expect(image).toBeInTheDocument();
  });
});
