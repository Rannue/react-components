import React, { useState } from 'react';
import { CardItem } from './card-item';
import { useSelector } from 'react-redux';
import { useGetCardQuery } from '../slises/apiSlise';
import { IInitialSearchState } from '../slises/searchSlise';
import { Character } from '../data';
import { Spinner } from './spinner';
import { NoCharacter } from './noCharacters';
import { LetSearch } from './letSearch';

export type TResult = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null;
  };
  results: Character[];
};

export const Cards = () => {
  const [, setModalStatus] = useState(true);
  const [, setCard] = useState<Character>();
  const searchText = useSelector((state: IInitialSearchState) => {
    return state.search.search;
  });
  const str = searchText as unknown as string;
  const { data: allCards, isLoading, isSuccess } = useGetCardQuery(str);

  function openModal(item: Character) {
    setModalStatus(false);
    setCard(item);
  }

  let content;
  if (!isSuccess && isLoading) {
    content = <Spinner />;
  } else if (str === '') {
    content = <LetSearch />;
  } else if (isSuccess && allCards.results.length) {
    content = allCards.results.map((card, i) => (
      <div className="card" key={i} onClick={() => openModal(card)}>
        <CardItem character={card} />
      </div>
    ));
  } else content = <NoCharacter searchText={str} />;

  return <div className="card-container">{content}</div>;
};
