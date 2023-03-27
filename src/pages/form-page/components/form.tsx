import React, { createRef, FormEvent, RefObject } from 'react';
import { Card } from '../form-page';

export type CardFormState = {
  name: string;
  email: string;
  date: string;
  select: string;
  checkbox: boolean;
  radio: string;
  image: File | null;
  invalidFields: string[];
  successMessage: string;
};

export interface CardFormProps {
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
      select: '',
      checkbox: false,
      radio: '',
      image: null,
      invalidFields: [],
      successMessage: '',
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
    } else {
      const nameRegex = /\b[A-Z][a-z]*\s+[A-Z][a-z]*\b/;
      const nameIsValid = nameRegex.test(name);

      if (!nameIsValid) invalidFields.push('name');
    }

    if (!email) {
      invalidFields.push('email');
    } else {
      const emailRegex = /@/;
      const emailIsValid = emailRegex.test(email);

      if (!emailIsValid) invalidFields.push('email');
    }

    if (!select) invalidFields.push('select');

    if (!date) invalidFields.push('date');

    if (!radio) {
      invalidFields.push('radio');
    } else if (!['Men', 'Women', 'Unknown gender'].includes(radio)) {
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
        this.formRef.current?.reset();
        this.showSuccessMessage();
      });
    } else {
      this.setState({ name, select, date, checkbox, radio, invalidFields });
    }
  };

  showSuccessMessage = () => {
    this.setState({ successMessage: 'Form submitted successfully!' }, () => {
      setTimeout(() => {
        this.setState({ successMessage: '' });
      }, 2000);
    });
  };

  render() {
    const { invalidFields } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
        <h3>Add User</h3>
        <div className="form-content">
          <div className="form-top">
            <div className="left-side column">
              <label className="validation-message__container">
                FULL NAME
                <input
                  type="text"
                  name="name"
                  className={invalidFields.includes('name') ? 'invalid' : ''}
                />
                {invalidFields.includes('name') && (
                  <div className="validation-message">
                    enter first and last name in capital letters
                  </div>
                )}
              </label>
              <label className="validation-message__container">
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
                {invalidFields.includes('date') && (
                  <div className="validation-message">enter date of birth</div>
                )}
              </label>
            </div>
            <div className="right-side column">
              <label className="validation-message__container">
                EMAIL
                <input
                  type="email"
                  name="email"
                  className={invalidFields.includes('email') ? 'invalid' : ''}
                />
                {invalidFields.includes('email') && (
                  <div className="validation-message">enter @mail address</div>
                )}
              </label>
              <label>
                CONTINENT
                <select name="select" className={invalidFields.includes('select') ? 'invalid' : ''}>
                  <option value="Eurasia">Eurasia</option>
                  <option value="Africa">Africa</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Australia">Australia</option>
                  <option value="Antarctica">Antarctica</option>
                </select>
              </label>
            </div>
          </div>
          <div className="form-bottom">
            <div className="sex validation-message__container">
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
                  <input id="radio-3" type="radio" name="radio" value="Unknown gender" />
                  <label htmlFor="radio-3">Other</label>
                </div>
              </div>
              {invalidFields.includes('radio') && (
                <div className="validation-message">indicate gender</div>
              )}
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
          {this.state.successMessage && (
            <div className="success-message">{this.state.successMessage}</div>
          )}
        </div>
      </form>
    );
  }
}
