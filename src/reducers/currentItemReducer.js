const currentItemReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPADTE_CURRENT_ITEM':
      return action.currentItem;

    default:
      return state;
  }
}

export default currentItemReducer;
