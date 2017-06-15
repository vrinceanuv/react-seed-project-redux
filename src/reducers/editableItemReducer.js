import * as types from '../constants/actionTypes';

const editableItemReducer = (state = {}, action) => {
  switch(action.type) {
    case types.UPDATE_EDITABLE_ITEM:
      return Object.assign(state, {
        name: action.item.name,
        id: action.item.id,
        editable: false
      });

    default:
      return state;
  }
}

export default editableItemReducer;
