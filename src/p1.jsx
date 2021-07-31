import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  double() {
    this.setState({ value: this.state.value * 2 });
    this.setState({ value: this.state.value * 2 });
    this.setState({ value: this.state.value * 2 });
  }
  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <button onClick={this.double.bind(this)}>Enviar</button>
      </>
    );
  }
}
