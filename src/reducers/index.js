import {combineReducers} from 'redux';
import items from './itemReducer';
import currentItem from './currentItemReducer';
import message from './messageReducer';
import loaded from './loaderReducer';

const rootReducer = combineReducers({
  items,
  currentItem,
  loaded,
  message
});

export default rootReducer;
