const itemReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, Object.assign({}, action.item)];

    case 'REMOVE_ITEM':
      const removeIndex = state.findIndex(item => item.id === action.id)

      return [
        ...state.slice(0, removeIndex),
        ...state.slice(removeIndex + 1)
      ]

    case 'UPDATE_DATA':
      return [...state, ...action.items];

    default:
      return state;
  }
}

export default itemReducer;
