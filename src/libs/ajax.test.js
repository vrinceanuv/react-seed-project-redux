import {loadItems, createItem, deleteItem} from './ajax';
import thunk from 'redux-thunk';
import {generateId} from './utils'
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as types from '../constants/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async calls', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  it('should load items', (done) => {
    const expectedAction = [
      {type: types.UPDATE_LOADER},
      {type: types.UPDATE_DATA, body: {items: [{ id: 19309, name: 'Add some items', editable:false }]}}
    ];

    const store = mockStore({items: []}, expectedAction);

    store.dispatch(loadItems()).then(() => {
      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.UPDATE_DATA);
      expect(actions[1].type).toEqual(types.UPDATE_LOADER);

      done();
    })
  })

  it('should add an item', (done) => {
    const id = generateId();
    const item = { id, name: 'Add some items', editable: false };

    nock('http://localhost:8080/')
      .post('/items', item)
      .reply(200, { body: { items: [item] } })

    const expectedAction = [
      {type: types.ADD_ITEM, body: {item}},
      {type: types.UPDATE_CURRENT_ITEM, body: {currentItem: ''}},
      {type: types.UPDATE_MESSAGE, body: {message: { type: 'success', text: 'Add some text' }}}
    ];

    const store = mockStore({items: []}, expectedAction);

    store.dispatch(createItem(item)).then(() => {
      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.ADD_ITEM);
      expect(actions[1].type).toEqual(types.UPDATE_CURRENT_ITEM);
      expect(actions[2].type).toEqual(types.UPDATE_MESSAGE);

      done();
    })
  })

  // TODO
  // it('should remove an item', (done) => {
  //   const item = { id: 48144, name: 'Add some items', editable: false };
  //
  //   nock('http://localhost:1233/')
  //     .delete('/items', {id: item.id})
  //
  //   const expectedAction = [
  //     {type: types.REMOVE_ITEM, body: {id: item.id}},
  //     {type: types.UPDATE_MESSAGE, body: {message: { type: 'success', text: 'Item removed!' }}}
  //   ];
  //
  //   const store = mockStore({items: [item]}, expectedAction);
  //
  //   store.dispatch(deleteItem(item.id)).then(() => {
  //     const actions = store.getActions();
  //
  //     console.log(actions);
  //
  //     expect(actions[0].type).toEqual(types.REMOVE_ITEM);
  //     expect(actions[1].type).toEqual(types.UPDATE_MESSAGE);
  //
  //     done();
  //   })
  // })
})
