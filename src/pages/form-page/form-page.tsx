import React from 'react';
import { Form } from './components/form';
import '../style.css';
import { CardList } from './components/form-card';

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

class FormPage extends React.Component<Record<string, never>> {
  private cardListRef: React.RefObject<CardList> = React.createRef<CardList>();

  addCard = (card: Card) => {
    this.cardListRef.current?.addCard(card);
  };

  render() {
    return (
      <>
        <div className="form-page">
          <Form addCard={this.addCard} />
          <CardList ref={this.cardListRef} />
        </div>
      </>
    );
  }
}

export { FormPage };
