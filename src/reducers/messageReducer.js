const messageReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_MESSAGE':
      return Object.assign({}, action.message);

    default:
      return state;
  }
}

export default messageReducer;
