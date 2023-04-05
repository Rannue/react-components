import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '../form-page';

type FormInputs = {
  name: string;
  email: string;
  date: string;
  select: string;
  checkbox: boolean;
  gender: string;
  image: FileList | null;
};

export interface CardFormProps {
  addCard: (card: Card) => void;
}

export const Form = ({ addCard }: CardFormProps) => {
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const card: Card = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      date: data.date,
      select: data.select,
      image: data.image ? data.image[0] : null,
      checkbox: data.checkbox,
      radio: data.gender,
    };
    console.log(card);
    addCard(card);
    showSuccessMessage();
    reset();
  };

  const showSuccessMessage = () => {
    setSuccessMessage('Form submitted successfully!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add User</h3>
      <div className="form-content">
        <div className="form-top">
          <div className="left-side column">
            <label className="validation-message__container">
              FULL NAME
              <input
                type="text"
                {...register('name', {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])[A-Z][a-z]*\s+[A-Z][a-z]*$/,
                })}
                className={errors.name ? 'invalid' : ''}
              />
              {errors.name && (
                <div className="validation-message">
                  enter first and last name in capital letters
                </div>
              )}
              {errors.name?.type === 'pattern' && (
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
                {...register('date', { required: true })}
                className={errors.date ? 'invalid' : ''}
              />
              {errors.date && <div className="validation-message">enter date of birth</div>}
            </label>
          </div>
          <div className="right-side column">
            <label className="validation-message__container">
              EMAIL
              <input
                className={errors.email ? 'invalid' : ''}
                type="email"
                {...register('email', {
                  required: true,
                  pattern: /@/,
                })}
              />
              {errors.email && <div className="validation-message">enter @mail address</div>}
              {errors.email?.type === 'pattern' && (
                <div className="validation-message">enter @mail address</div>
              )}
            </label>
            <label>
              CONTINENT
              <select
                className={errors.select?.type == 'required' ? 'invalid' : ''}
                {...register('select', { required: 'Select a continent' })}
              >
                <option className="select-placeholder" value="">
                  Select a continent
                </option>
                <option value="Eurasia">Eurasia</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Australia">Australia</option>
                <option value="Antarctica">Antarctica</option>
              </select>
              {errors.select?.type == 'required' && (
                <div className="validation-message">Please select a continent</div>
              )}
            </label>
          </div>
        </div>
        <div className="form-bottom">
          <div className="sex validation-message__container">
            <h5>GENDER</h5>
            <div className="radio">
              <div className="form_radio">
                <input
                  id="radio-1"
                  type="radio"
                  value="Man"
                  {...register('gender', { required: true })}
                />
                <label className="radio-label" htmlFor="radio-1">
                  Man
                </label>
                {errors.gender && <div className="validation-message">choose gender</div>}
              </div>
              <div className="form_radio">
                <input
                  id="radio-2"
                  type="radio"
                  value="Woman"
                  {...register('gender', { required: true })}
                />
                <label className="radio-label" htmlFor="radio-2">
                  Woman
                </label>
              </div>
              <div className="form_radio">
                <input
                  id="radio-3"
                  type="radio"
                  value="Unknown gender"
                  {...register('gender', { required: true })}
                />
                <label className="radio-label" htmlFor="radio-3">
                  Other
                </label>
              </div>
            </div>
          </div>
          <label>
            <label className="input-file">
              AVATAR
              <input type="file" {...register('image', { required: true })} />
              {errors.image && <div className="validation-message">attach a photo</div>}
              <span>Choose File</span>
            </label>
          </label>
        </div>
      </div>
      <div className="form-submit">
        <label className="checkbox-container">
          I agree to receive memes
          <input type="checkbox" {...register('checkbox', { required: true })} />
          {errors.checkbox && (
            <div className="validation-message">please agree to the newsletter</div>
          )}
        </label>
        <button type="submit">Submit</button>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </form>
  );
};
