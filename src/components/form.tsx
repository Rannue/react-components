import React, { createRef, FormEvent, RefObject } from 'react';

export class Form extends React.Component {
  input: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submitted value: ', this.input.current!.value);
  }

  handleInputChange = (): void => {
    const value = this.input.current!.value;
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(value)) {
      this.input.current!.setCustomValidity('Name must contain only letters');
    } else if (value.trim().length < 2) {
      this.input.current!.setCustomValidity('Name must be at least 2 characters long');
    } else {
      this.input.current!.setCustomValidity('');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} onChange={this.handleInputChange}  />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
