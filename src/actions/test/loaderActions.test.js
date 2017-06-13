import * as actions from '../loaderActions';
import * as types from '../../constants/actionTypes';

// Test loader actions
describe('Item Actions', () => {
  it('should updateCurrentItem', () => {
    const loaded = true;
    const expectedAction = { type: types.UPDATE_LOADER, loaded };
    const action = actions.updateLoader(loaded);

    expect(action).toEqual(expectedAction);
  })
})
