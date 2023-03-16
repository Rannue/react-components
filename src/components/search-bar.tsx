import React from "react";

type MyProps = {
  message: string | null;
};
type MyState = {
  value: string;
};

export class SearchBar extends React.Component<MyProps, MyState> {
  constructor(props: Readonly<MyProps> | MyProps) {
    super(props);
    this.state = {
      value: this.getInputValueFromLocalStorage(),
    };

    this.InputChange = this.InputChange.bind(this);
  }

  InputChange(event: React.FormEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
    this.setState({ value: inputValue });
    this.addValueToLocalStorage(inputValue);
  }

  addValueToLocalStorage(value: string) {
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
