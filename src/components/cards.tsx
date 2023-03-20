import React from 'react';
import { IProduct } from '../assets/data';
import { CardItem } from './card-item';

type TCardsState = { cardsArr: IProduct[] };

export class Cards extends React.Component<IProduct[], TCardsState> {
  constructor(props: Readonly<IProduct[]> | IProduct[]) {
    super(props);
    this.state = {
      cardsArr: Object.values(this.props),
    };
  }

  render() {
    return (
      <div className="card-container">
        {this.state.cardsArr.map((card) => (
          <div className="card" key={card.id}>
            <CardItem {...card} />
          </div>
        ))}
      </div>
    );
  }
}
