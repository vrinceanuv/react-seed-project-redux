import {loadItems} from './ajax';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as types from '../constants/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async calls', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  it('should', (done) => {
    const expectedAction = [
      {type: types.UPDATE_LOADER},
      {type: types.UPDATE_DATA, body: {items: [{ id: 19309, name: 'Add some items' }]}}
    ];

    const store = mockStore({items: []}, expectedAction);

    store.dispatch(loadItems()).then(() => {
      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.UPDATE_DATA);
      expect(actions[1].type).toEqual(types.UPDATE_LOADER);

      done();
    })
  })
})
