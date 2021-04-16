import React, { Component } from "react";
import "./Blockchain.css";

export class Blockchain extends Component {
  constructor() {
    super();
    this.state = {
      currencies: null,
    };
  }
  componentDidMount() {
    fetch("https://blockchain.info/ticker").then((res) => {
      res.json().then((result) => {
        let { currencies } = this.state;
        currencies = result;
        this.setState({ currencies: currencies });
        // console.log("=======================", this.state.currencies.USD.buy);
      });
    });
  }

  render() {
    return (
      console.log(this.state.currencies),
      (
       
        <div id="item_table">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">USD</th>
                <th scope="col">AUD</th>
                <th scope="col">BRl</th>
                <th scope="col">CAD</th>
                <th scope="col">CLP</th>
              </tr>
            </thead>
            <tbody>
              {this.state.currencies === null ? (
                " "
              ) : (
                <tr>
                  <td>
                    <p>
                      Sell: {this.state.currencies.USD.sell}{" "}
                      {this.state.currencies.USD.symbol}
                    </p>
                  </td>
                  <td>
                    <p>
                      Buy :{this.state.currencies.AUD.buy}{" "}
                      {this.state.currencies.AUD.symbol}
                    </p>
                  </td>
                  <td>
                    <p>
                      Sell :{this.state.currencies.BRL.sell}{" "}
                      {this.state.currencies.BRL.symbol}
                    </p>
                  </td>
                  <td>
                    <p>
                      Buy :{this.state.currencies.CLP.buy}{" "}
                      {this.state.currencies.CLP.symbol}
                    </p>
                  </td>
                  <td>
                    <p>
                      Sell :{this.state.currencies.CLP.buy}{" "}
                      {this.state.currencies.CLP.symbol}
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default Blockchain;
