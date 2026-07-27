import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();

    this.state = {
      amount: "",
      currency: "Euro"
    };
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value
    });
  };

  handleCurrencyChange = (event) => {
    this.setState({
      currency: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const amount = parseFloat(this.state.amount);

    if (isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }

    // 1 Euro = 90 INR (example conversion)
    const euro = amount / 90;

    alert("Converting to Euro Amount is " + euro.toFixed(2));
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Amount: </label>

          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />

          <br />
          <br />

          <label>Currency: </label>

          <input
            type="text"
            value={this.state.currency}
            onChange={this.handleCurrencyChange}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>

        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;