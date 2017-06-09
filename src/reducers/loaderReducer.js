const loaderReducer = (state = false, action) => {
  switch(action.type) {
    case 'UPDATE_LOADER':
      return action.loaded;

    default:
      return state;
  }
}

export default loaderReducer;
