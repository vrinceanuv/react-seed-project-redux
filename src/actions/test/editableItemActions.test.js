import * as actions from '../editableItemActions';
import * as types from '../../constants/actionTypes';

// Test currentItem actions
describe('currentItem Actions', () => {
  it('should updateEditableItem', () => {
    const item = {
      id: 1,
      name: 'name',
      editable: false
    }
    const expectedAction = { type: types.UPDATE_EDITABLE_ITEM, item };
    const action = actions.updateEditableItem(item);

    expect(action).toEqual(expectedAction);
  })
})
