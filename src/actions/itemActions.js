import * as types from '../constants/actionTypes';

export const addItem = (item) => {
  return { type: types.ADD_ITEM, item };
}

export const removeItem = (id) => {
  return { type: types.REMOVE_ITEM, id }
}

export const updateItems = (items) => {
  return { type: types.UPDATE_DATA, items }
}
