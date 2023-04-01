import { IProduct } from 'assets/data';
import React from 'react';

type CardItemProps = IProduct;

export const CardItem: React.FC<CardItemProps> = ({ thumbnail, title, price }) => {
  return (
    <>
      <div className="card-img__wrapper">
        <img className="card-img" src={thumbnail} alt={title} />
      </div>
      <div className="card-text__wrapper">
        <div className="card-title">
          <h5>{title}</h5>
        </div>
        <div className="card-price">
          <h4>{price}$</h4>
        </div>
      </div>
    </>
  );
};
