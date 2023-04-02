export interface Card {
  id: number;
  name: string;
  email: string;
  date: string;
  select: string;
  checkbox: boolean;
  radio: string;
  image: File | null;
}

import React, { useState } from 'react';
import { Form } from './components/form';
import '../style.css';
import CardList from './components/form-card';

function FormPage() {
  const [cards, setCards] = useState<Card[]>([]);

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
        <CardList cards={cards} removeCard={removeCard} />
      </div>
    </>
  );
}

export { FormPage };
