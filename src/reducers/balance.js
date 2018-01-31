import * as constants from '../actions/constants';

const initialState = 0;

const balance = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_BALANCE:
      return action.balance
    default:
      return state;
  }
}

export default balance;