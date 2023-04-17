export interface Card {
  id: number;
  name: string;
  email: string;
  date: string;
  select: string;
  checkbox: boolean;
  radio: string;
  image: string;
}

export type TCards = {
  cards: Card[];
};

import React, { useState } from 'react';
import { Form } from './components/form';
import '../style.css';
import CardList from './components/form-card';
import { useSelector } from 'react-redux';
import { IInitialCardsState } from './slises/cardsSlice';

function FormPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const cardStore = useSelector((state: IInitialCardsState) => state.cards) as unknown as TCards;

  const cardStoreResult: TCards = cardStore;
  const resultCardsArr: Card[] = cardStoreResult.cards;

  const addCard = (card: Card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (id: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <>
      <div data-testid="form-page" className="form-page">
        <Form addCard={addCard} />
        {resultCardsArr && <CardList cards={resultCardsArr} removeCard={removeCard} />}
      </div>
    </>
  );
}

export { FormPage };
