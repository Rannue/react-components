import { IProduct } from "assets/data";
import React from "react";

export class CardItem extends React.Component<IProduct> {
  constructor(props: Readonly<IProduct> | IProduct) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card-img__wrapper">
          <img
            className="card-img"
            src={this.props.thumbnail}
            alt={this.props.title}
          />
        </div>
        <div className="card-text__wrapper">
          <div className="card-title">
            <h5>{this.props.title}</h5>
          </div>
          <div className="card-price">
            <h4>{this.props.price}$</h4>
          </div>
        </div>
      </>
    );
  }
}
