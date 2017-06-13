import {createStore} from 'redux';
import rootReducer from '../reducers';
import * as actions from '../actions';

const initialState = {
  items: [],
  currentItem: '',
  message: {},
  loaded: false
};

describe('Store', () => {
  it('should handle creating items', () => {
    const store = createStore(rootReducer, initialState);
    const item = {
      id: 123221,
      name: 'Pretty item'
    }

    const action = actions.addItem(item);
    store.dispatch(action);

    const actual = store.getState().items[0];
    const expected = {
      id: 123221,
      name: 'Pretty item'
    }

    expect(actual).toEqual(expected);
  })
})
