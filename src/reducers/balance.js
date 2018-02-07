import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const initialState = 0;

const balance = (state = initialState, action) => {
  let balance;

  switch(action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = state + action.deposit;
      break;
    case constants.WITHDRAW:
      balance = state - action.withdrawal;
      break;
    default:
      balance = parseInt(read_cookie(constants.BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(constants.BALANCE_COOKIE, balance);
  return balance;
}

export default balance;