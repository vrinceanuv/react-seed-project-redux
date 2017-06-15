import itemReducer from '../itemReducer';
import * as actions from '../../actions/itemActions';

describe('currentItem Reducer', () => {

  // ADD ITEM
  describe('ADD_ITEM', () => {
    it('should add item when passed ADD_ITEM', () => {
      const initialState = [
        { id: 1, name: 'Setup React Project' },
        { id: 19309, name: 'Add some items' },
      ];

      const newItem = { id: 12, name: 'new item' };

      const action = actions.addItem(newItem);
      const newState = itemReducer(initialState, action);

      expect(newState.length).toEqual(3);
      expect(newState).not.toEqual(initialState);
    })

    it('should not mutate when add item when passed ADD_ITEM', () => {
      const initialState = [
        { id: 1, name: 'Setup React Project' },
        { id: 19309, name: 'Add some items' },
      ];

      const newItem = { id: 12, name: 'new item' };

      const expectedState = [
        { id: 1, name: 'Setup React Project' },
        { id: 19309, name: 'Add some items' },
        { id: 12, name: 'new item' }
      ];


      const action = actions.addItem(newItem);
      const newState = itemReducer(initialState, action);

      expect(newState).toEqual(expectedState);
      expect(newState).not.toEqual(initialState);
    })
  })

  // REMOVE_ITEM
  describe('REMOVE_ITEM', () => {
    it('should remove an item when passed REMOVE_ITEM', () => {
      const initialState = [
        { id: 1, name: 'Setup React Project', editable: false },
        { id: 19309, name: 'Add some items', editable: false },
      ];

      const id = 1;

      const action = actions.removeItem(id);
      const newState = itemReducer(initialState, action);

      expect(newState.length).toEqual(1);
      expect(newState).not.toEqual(initialState);
    })

    it('should not mutate when remove an item when passed REMOVE_ITEM', () => {
      const initialState = [
        { id: 1, name: 'Setup React Project', editable: false },
        { id: 19309, name: 'Add some items', editable: false },
      ];

      const id = 1;

      const expectedState = [
        { id: 19309, name: 'Add some items', editable: false },
      ];

      const action = actions.removeItem(id);
      const newState = itemReducer(initialState, action);

      expect(newState).toEqual(expectedState);
      expect(newState).not.toEqual(initialState);
    })
  })

  // UPDATE_DATA
  describe('UPDATE_DATA', () => {
    it('should update data(items) when passed UPDATE_DATA', () => {
      const initialState = [];

      const items = [
        { id: 1, name: 'Setup React Project' },
        { id: 19309, name: 'Add some items' },
      ];

      const action = actions.updateItems(items);
      const newState = itemReducer(initialState, action);

      expect(newState.length).toEqual(2);
      expect(newState).not.toEqual(initialState);
    })

    it('should not mutate when update data(items) when passed UPDATE_DATA', () => {
      const initialState = [
        { id: 345, name: 'item existent', editable: false },
        { id: 6987, name: 'item is in state', editable: false },
      ];

      const items = [
        { id: 1, name: 'Setup React Project', editable: false },
        { id: 19309, name: 'Add some items', editable: false },
      ];

      const expectedState = [
        { id: 345, name: 'item existent', editable: false },
        { id: 6987, name: 'item is in state', editable: false },
        { id: 1, name: 'Setup React Project', editable: false },
        { id: 19309, name: 'Add some items', editable: false },
      ];

      const action = actions.updateItems(items);
      const newState = itemReducer(initialState, action);

      expect(newState.length).toEqual(4);
      expect(newState).toEqual(expectedState);
      expect(newState).not.toEqual(initialState);
    })
  })

  // MAKE_ITEM_EDITABLE
  describe('MAKE_ITEM_EDITABLE', () => {
    it('should update item from data(items) when passed MAKE_ITEM_EDITABLE', () => {
      const initialState = [
        { id: 345, name: 'item existent', editable: false },
        { id: 6987, name: 'item is in state', editable: false },
      ];

      const id = 345;
      const findIndex = initialState.findIndex(item => item.id === id)
      const item = initialState.find(item => item.id === id)

      const updatedItem = Object.assign(item, {editable: true})

      const expectedState = [
        ...initialState.slice(0, findIndex),
        updatedItem,
        ...initialState.slice(findIndex + 1)
      ];

      const action = actions.makeItemEditable(id);
      const newState = itemReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    })
  })

  // UPDATE_CHANGED_ITEMS
  describe('UPDATE_CHANGED_ITEMS', () => {
    it('should update item from data(items) when passed UPDATE_CHANGED_ITEMS', () => {
      const initialState = [
        { id: 345, name: 'item existent', editable: false },
        { id: 6987, name: 'item is in state', editable: false },
      ];

      const id = 345;
      const findIndex = initialState.findIndex(item => item.id === id)
      const item = initialState.find(item => item.id === id)

      const updatedItem = Object.assign(item, {editable: false, name: 'abc'})

      const expectedState = [
        ...initialState.slice(0, findIndex),
        updatedItem,
        ...initialState.slice(findIndex + 1)
      ];

      const action = actions.updateChangedItems(updatedItem);
      const newState = itemReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    })
  })

  // DEFAULT CASE
  describe('Default case', () => {
    it('should return the same state', () => {
      const initialState = [
        { id: 1, name: 'Setup React Project' }
      ];

      const newState = itemReducer(initialState, {type: null});

      expect(newState).toEqual(initialState);
    })
  })
})
