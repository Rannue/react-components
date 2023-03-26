import React from 'react';
import { Card } from '../form-page';
import keyboard6 from '../../../assets/k6.jpg';

export interface CardListState {
  cards: Card[];
}

export class CardList extends React.Component<unknown, CardListState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  getAge(birthdate: string): number {
    const birthdateObj: Date = new Date(birthdate);
    const now: Date = new Date();
    const diffMs: number = now.getTime() - birthdateObj.getTime();
    const diffYears: number = diffMs / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(diffYears);
  }

  addCard = (card: Card) => {
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
  };

  render() {
    return (
      <div className="form-cards">
        {this.state.cards.map((card) => (
          <div key={card.id} className="card-container">
            <div className="avatar-container">
              <img
                className="avatar"
                src={card.image ? URL.createObjectURL(card.image) : keyboard6}
                alt=""
              />
            </div>
            <div className="info-container">
              <h2 className="name">{card.name}</h2>
              <p>
                {card.radio} / {this.getAge(card.date)}
              </p>
              <div className="email-container info-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
                    fill="#1E1E1E"
                  />
                </svg>
                <h5 className="email">{card.email}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
