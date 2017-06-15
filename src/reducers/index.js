import {combineReducers} from 'redux';
import items from './itemReducer';
import currentItem from './currentItemReducer';
import message from './messageReducer';
import loaded from './loaderReducer';
import editableItem from './editableItemReducer';

const rootReducer = combineReducers({
  items,
  currentItem,
  loaded,
  message,
  editableItem
});

export default rootReducer;
