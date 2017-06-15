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

    case types.MAKE_ITEM_EDITABLE:
      const disableEditable = state.map(item => {
        if(item.editable) {
          return Object.assign(item, {editable: false})
        }
        return item;
      })
      const item = disableEditable.find(item => item.id === action.id)
      const itemId = disableEditable.findIndex(item => item.id === action.id)
      const updatedItem = Object.assign(item, {editable: true})

      return [
        ...disableEditable.slice(0, itemId),
        updatedItem,
        ...disableEditable.slice(itemId + 1)
      ]

    case types.UPDATE_CHANGED_ITEMS:
      const currentItem = state.find(item => item.id === action.item.id)
      const currentItemId = state.findIndex(currentItem => currentItem.id === action.item.id)
      const newItem = Object.assign(currentItem, {editable: false, name: action.item.name})

      return [
        ...state.slice(0, currentItemId),
        newItem,
        ...state.slice(currentItemId + 1)
      ]

    case types.UPDATE_DATA:
      return [...state, ...action.items];

    default:
      return state;
  }
}

export default itemReducer;
