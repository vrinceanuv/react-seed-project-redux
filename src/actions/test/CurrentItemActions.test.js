import * as actions from '../currentItemActions';
import * as types from '../../constants/actionTypes';

// Test currentItem actions
describe('currentItem Actions', () => {
  it('should updateCurrentItem', () => {
    const currentItem = 'updated Item';
    const expectedAction = { type: types.UPDATE_CURRENT_ITEM, currentItem };
    const action = actions.updateCurrentItem(currentItem);

    expect(action).toEqual(expectedAction);
  })
})
