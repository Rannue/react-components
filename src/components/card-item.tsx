import { IProduct } from "assets/data";
import React from "react";

export class CardItem extends React.Component<IProduct> {
  constructor(props: Readonly<IProduct> | IProduct) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.thumbnail}
            alt={this.props.title}
          />
        </div>
        <div className="Comment-text">{this.props.title}</div>
        <div className="Comment-date">{this.props.price}</div>
      </>
    );
  }
}
