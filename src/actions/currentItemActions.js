import * as types from '../constants/actionTypes';

export const updateCurrentItem = (currentItem) => {
  return { type: types.UPDATE_CURRENT_ITEM, currentItem };
}
