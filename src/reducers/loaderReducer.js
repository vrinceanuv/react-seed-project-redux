import * as types from '../constants/actionTypes';

const loaderReducer = (state = false, action) => {
  switch(action.type) {
    case types.UPDATE_LOADER:
      return action.loaded;

    default:
      return state;
  }
}

export default loaderReducer;
