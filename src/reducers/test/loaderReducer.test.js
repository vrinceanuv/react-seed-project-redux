import loaderReducer from '../loaderReducer';
import * as actions from '../../actions/loaderActions';

describe('loader Reducer', () => {
  it('should update the loader when passed UPDATE_LOADER', () => {
    const initialState = false;
    const newLoaderState = true;
    const action = actions.updateLoader(newLoaderState);
    const newState = loaderReducer(initialState, action);

    expect(newState).toBe(newLoaderState);
  })
})
