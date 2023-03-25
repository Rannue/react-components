import React, { createRef, FormEvent, RefObject } from 'react';

type FormState = {
  name: string;
  date: string;
  select: string;
  checkbox: boolean;
  invalidFields: string[];
};

export class Form extends React.Component<{}, FormState> {
  private formRef: RefObject<HTMLFormElement> = createRef<HTMLFormElement>();

  constructor(props: {}) {
    super(props);

    this.state = {
      name: '',
      date: '',
      select: 'option1',
      checkbox: false,
      invalidFields: [],
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const select = formData.get('select') as string;
    const date = formData.get('date') as string;
    const checkbox = formData.get('checkbox') !== null;

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

    if (invalidFields.length === 0) {
      this.setState({ name, select, date, checkbox, invalidFields }, () => {
        this.formRef.current?.reset();
      });
    } else {
      this.setState({ name, select, date, checkbox, invalidFields });
    }
  };

  render() {
    const { invalidFields } = this.state;

    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef}>
        <label>
          Name:
          <input type="text" name="name" className={invalidFields.includes('name') ? 'invalid' : ''} />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            max={new Date(new Date().getFullYear() - 5, new Date().getMonth(), new Date().getDate()).toISOString().slice(0, 10)}
            name="date"
            className={invalidFields.includes('date') ? 'invalid' : ''}
          />
        </label>
        <br />
        <label>
          Select input:
          <select name="select" className={invalidFields.includes('select') ? 'invalid' : ''}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <br />
        <label>
          Checkbox:
          <input type="checkbox" name="checkbox" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}