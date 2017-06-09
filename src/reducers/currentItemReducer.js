import * as types from '../constants/actionTypes';

const currentItemReducer = (state = '', action) => {
  switch(action.type) {
    case types.UPDATE_CURRENT_ITEM:
      return action.currentItem;

    default:
      return state;
  }
}

export default currentItemReducer;
