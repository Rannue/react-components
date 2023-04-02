import React, { useState } from 'react';
import { IProduct } from '../../assets/data';
import { CardItem } from './card-item';

export const Cards: React.FC<IProduct[]> = (props) => {
  const [cardsArr] = useState<IProduct[]>(Object.values(props));

  return (
    <div className="card-container">
      {cardsArr.map((card) => (
        <div className="card" key={card.id}>
          <CardItem {...card} />
        </div>
      ))}
    </div>
  );
};
