import * as types from '../constants/actionTypes';

const itemReducer = (state = [], action) => {
  switch(action.type) {
    case types.ADD_ITEM:
      return [...state, Object.assign({}, action.item)];

    case types.REMOVE_ITEM:
      const removeIndex = state.findIndex(item => item.id === action.id)

      return [
        ...state.slice(0, removeIndex),
        ...state.slice(removeIndex + 1)
      ]

    case types.UPDATE_DATA:
      return [...state, ...action.items];

    default:
      return state;
  }
}

export default itemReducer;
