import * as types from '../constants/actionTypes';

const messageReducer = (state = {}, action) => {
  switch(action.type) {
    case types.UPDATE_MESSAGE:
      return Object.assign({}, action.message);

    default:
      return state;
  }
}

export default messageReducer;
