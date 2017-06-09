import * as types from '../constants/actionTypes';

export const updateMessage = (message) => {
  return { type: types.UPDATE_MESSAGE, message };
}
