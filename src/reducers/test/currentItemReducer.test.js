import currentItemReducer from '../currentItemReducer';
import * as actions from '../../actions/currentItemActions';

describe('currentItem Reducer', () => {
  it('should update current item when passed UPDATE_CURRENT_ITEM', () => {
    const initialState = '';
    const newItem = 'new item to add';
    const action = actions.updateCurrentItem(newItem);
    const newState = currentItemReducer(initialState, action);

    expect(newState).toBe(newItem);
  })
})
