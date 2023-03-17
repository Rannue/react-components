import React from "react";

type TSearchBarState = {
  value: string;
};

export class SearchBar extends React.Component<object, TSearchBarState> {
  constructor(props: Readonly<object> | object) {
    super(props);
    this.state = {
      value: this.getInputValueFromLocalStorage(),
    };

    this.InputChange = this.InputChange.bind(this);
  }

  InputChange(event: React.FormEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    this.setState({ value: inputValue });
    this.addInputValueToLocalStorage(inputValue);
  }

  addInputValueToLocalStorage(value: string) {
    localStorage.setItem("inputValue", value);
  }

  getInputValueFromLocalStorage() {
    const inputValue = localStorage.getItem("inputValue");
    if (inputValue) {
      return inputValue;
    }
    return "";
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.InputChange} />
    );
  }
}
