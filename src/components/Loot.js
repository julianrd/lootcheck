import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.getBitcoin();
  }

  computeBitcoin() {
    const { bitcoin, balance } = this.props;

    if(!bitcoin.bpi) return '';

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBitcoin: () => dispatch(fetchBitcoin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loot);