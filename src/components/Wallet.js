import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0
    };
  }

  updateBalance = (event) => {
    const value = parseInt(event.target.value, 10);
    this.setState({
      balance: value
    })
  }

  deposit = () => {
    this.props.deposit(this.state.balance);
  }

  withdraw = () => {
    this.props.withdraw(this.state.balance);
  }

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <hr/>
        <input
          type="text"
          className="input-wallet"
          onChange={this.updateBalance}
        />
        <button 
          className="btn-deposit"
          onClick={this.deposit}
        >
          Deposit
        </button>
        <button 
          className="btn-withdraw"
          onClick={this.withdraw}
        >
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ balance }, ownProps) => {
  return {
    balance
  }
}

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);