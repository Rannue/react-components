import React from 'react';
import '../../style.css';

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

function CardList({ cards }: { cards: Card[]; removeCard: (id: number) => void }) {
  function getAge(birthdate: string): number {
    const birthdateObj: Date = new Date(birthdate);
    const now: Date = new Date();
    const diffMs: number = now.getTime() - birthdateObj.getTime();
    const diffYears: number = diffMs / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(diffYears);
  }

  return (
    <div className="form-cards">
      {cards.map((card) => (
        <div key={card.id} className="form-card-container">
          <div className="avatar-container">
            <img
              className="avatar"
              src={card.image ? URL.createObjectURL(card.image) : ''}
              alt=""
            />
          </div>
          <div className="info-container">
            <div className="info-container__top">
              <h6 className="name">{card.name}</h6>
              <h5>
                {card.radio}, {getAge(card.date)} years
              </h5>
            </div>
            <div className="info-container__bottom">
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
                <p className="email">{card.email}</p>
              </div>
              <div className="location-container info-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 10C4.99858 7.16754 6.70425 4.61339 9.32107 3.52939C11.9379 2.4454 14.9501 3.04524 16.952 5.049C18.2685 6.3596 19.0059 8.14239 19 10C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 7C10.9282 7 9.93782 7.57179 9.40193 8.5C8.86603 9.4282 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34314 13.6569 7 12 7Z"
                    fill="#1E1E1E"
                  />
                </svg>

                <p className="email">{card.select}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
