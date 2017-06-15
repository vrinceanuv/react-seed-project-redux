import * as types from '../constants/actionTypes';

export const updateEditableItem = (item) => {
  return { type: types.UPDATE_EDITABLE_ITEM, item }
}
