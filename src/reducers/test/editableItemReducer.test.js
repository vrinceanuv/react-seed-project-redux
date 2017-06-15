import editableItemReducer from '../editableItemReducer';
import * as actions from '../../actions/editableItemActions';

describe('currentItem Reducer', () => {
  it('should update current item when passed UPDATE_CURRENT_ITEM', () => {
    const initialState = {};
    const newItem = Object.assign(initialState, {
      id: 1,
      name: 'name',
      editable: false
    })
    const action = actions.updateEditableItem(newItem);
    const newState = editableItemReducer(initialState, action);

    expect(newState).toBe(newItem);
  })

  it('should return the same state in the default case', () => {
    const initialState = {}
    const newState = editableItemReducer(initialState, {type: null});

    expect(newState).toBe(initialState);
  })
})
