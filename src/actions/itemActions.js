import * as types from '../constants/actionTypes';

export const addItem = (item) => {
  return { type: types.ADD_ITEM, item };
}

export const removeItem = (id) => {
  return { type: types.REMOVE_ITEM, id }
}

export const makeItemEditable = (id) => {
  return { type: types.MAKE_ITEM_EDITABLE, id }
}

export const updateChangedItems = (item) => {
  return { type: types.UPDATE_CHANGED_ITEMS, item }
}

export const updateItems = (items) => {
  return { type: types.UPDATE_DATA, items }
}

export const cancelEdit = () => {
  return { type: types.CANCEL_EDIT }
}
