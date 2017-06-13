import messageReducer from '../messageReducer';
import * as actions from '../../actions/messageActions';

describe('updateMessage Reducer', () => {
  it('should update the message when passed UPDATE_MESSAGE', () => {
    const initialState = {type: null, text: ''};
    const newMessage = {type: 'error', text: 'there is an error'};
    const action = actions.updateMessage(newMessage);
    const newState = messageReducer(initialState, action);

    expect(newState).not.toBe(initialState);
  })

  it('should return the same state in the default case', () => {
    const initialState = {type: null, text: ''};
    const newState = messageReducer(initialState, {type: null});

    expect(newState).toBe(initialState);
  })
})
