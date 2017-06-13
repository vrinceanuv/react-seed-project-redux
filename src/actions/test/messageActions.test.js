import * as actions from '../messageActions';
import * as types from '../../constants/actionTypes';

// Test message actions
describe('Message Actions', () => {
  it('should message', () => {
    const message = {type: 'success', text:'Success'};
    const expectedAction = { type: types.UPDATE_MESSAGE, message };
    const action = actions.updateMessage(message);

    expect(action).toEqual(expectedAction);
  })
})
