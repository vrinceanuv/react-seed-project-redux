import * as actions from '../itemActions';
import * as types from '../../constants/actionTypes';

// Test item actions
describe('Item Actions', () => {
  it('should add an item', () => {
    const item = {
      id: 1,
      name: 'My item'
    };

    const expectedAction = { type: types.ADD_ITEM, item };
    const action = actions.addItem(item);

    expect(action).toEqual(expectedAction);
  })

  it('should remove an item', () => {
    const id = 1;
    const expectedAction = { type: types.REMOVE_ITEM, id };
    const action = actions.removeItem(id);

    expect(action).toEqual(expectedAction);
  })

  it('should update data', () => {
    const items = [
      {
        "id": 1,
        "name": "Setup React Project"
      },
      {
        "id": 19309,
        "name": "Add some items"
      }
    ];

    const expectedAction = { type: types.UPDATE_DATA, items };
    const action = actions.updateItems(items);

    expect(action).toEqual(expectedAction);
  })
})
