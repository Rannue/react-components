import React, { createRef, FormEvent, RefObject } from 'react';
import { Card } from '../form-page';

type CardFormState = {
  name: string;
  email: string;
  date: string;
  select: string;
  checkbox: boolean;
  radio: string;
  image: File | null;
  invalidFields: string[];
};

interface CardFormProps {
  addCard: (card: Card) => void;
}

export class Form extends React.Component<CardFormProps, CardFormState> {
  private formRef: RefObject<HTMLFormElement> = createRef<HTMLFormElement>();

  constructor(props: CardFormProps) {
    super(props);

    this.state = {
      name: '',
      email: '',
      date: '',
      select: 'сountry',
      checkbox: false,
      radio: '',
      image: null,
      invalidFields: [],
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const select = formData.get('select') as string;
    const date = formData.get('date') as string;
    const checkbox = formData.get('checkbox') !== null;
    const radio = formData.get('radio') as string;
    const image = formData.get('image') as File | null;

    const invalidFields: string[] = [];

    if (!name) {
      invalidFields.push('name');
    }
    if (!select) {
      invalidFields.push('select');
    }
    if (!date) {
      invalidFields.push('date');
    }

    if (!radio) {
      invalidFields.push('radio');
    }

    if (invalidFields.length === 0) {
      this.setState({ name, email, date, select, checkbox, radio, invalidFields }, () => {
        const card: Card = {
          id: Date.now(),
          name,
          email,
          date,
          select,
          image,
          checkbox,
          radio,
        };
        this.props.addCard(card);
        console.log(image);
        this.formRef.current?.reset();
      });
    } else {
      this.setState({ name, select, date, checkbox, radio, invalidFields });
    }
  };

  render() {
    const { invalidFields } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
        <div className="form-content">
          <div className="form-top">
            <div className="left-side column">
              <label>
                FULL NAME
                <input
                  type="text"
                  name="name"
                  className={invalidFields.includes('name') ? 'invalid' : ''}
                />
              </label>
              <label>
                BIRTHDAY
                <input
                  type="date"
                  max={new Date(
                    new Date().getFullYear() - 5,
                    new Date().getMonth(),
                    new Date().getDate()
                  )
                    .toISOString()
                    .slice(0, 10)}
                  name="date"
                  className={invalidFields.includes('date') ? 'invalid' : ''}
                />
              </label>
            </div>
            <div className="right-side column">
              <label>
                EMAIL
                <input
                  type="email"
                  name="email"
                  className={invalidFields.includes('email') ? 'invalid' : ''}
                />
              </label>
              <label>
                CONTINENT
                <select name="select" className={invalidFields.includes('select') ? 'invalid' : ''}>
                  <option value="EU">Eurasia</option>
                  <option value="AF">Africa</option>
                  <option value="NA">North America</option>
                  <option value="SA">South America</option>
                  <option value="AU">Australia</option>
                  <option value="AN">Antarctica</option>
                </select>
              </label>
            </div>
          </div>
          <div className="form-bottom">
            <div className="sex">
              <h5>SEX</h5>
              <div className="radio">
                <div className="form_radio">
                  <input id="radio-1" type="radio" name="radio" value="Men" />
                  <label htmlFor="radio-1">Men</label>
                </div>
                <div className="form_radio">
                  <input id="radio-2" type="radio" name="radio" value="Women" />
                  <label htmlFor="radio-2">Women</label>
                </div>
                <div className="form_radio">
                  <input id="radio-3" type="radio" name="radio" value="Other" />
                  <label htmlFor="radio-3">Other</label>
                </div>
              </div>
            </div>
            <label>
              <label className="input-file">
                AVATAR
                <input type="file" name="image" />
                <span>Choose File</span>
              </label>
            </label>
          </div>
        </div>
        <div className="form-submit">
          <label className="checkbox-container">
            I agree to receive memes
            <input type="checkbox" name="checkbox" />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
