import api from 'superagent-wrapper';
import {updateMessage} from './utils';
import * as actions from '../actions';
import * as url from '../constants/apiConstants';
import * as messageTypes from '../constants/messageTypes'

export const loadItems = () => dispatch => {
  return api.get(url.ITEMS_URL)
    .then(items => {
      dispatch(actions.updateItems(items))
      dispatch(actions.updateLoader(true))
    })
}

export const createItem = item => dispatch => {
  return api.post(url.ITEMS_URL, item)
    .then(() => {
      dispatch(actions.addItem(item))
      dispatch(actions.updateCurrentItem(''))
      updateMessage(dispatch, messageTypes.MESSAGE_ADD_SUCCESS)
    })
    .catch(() => {
      updateMessage(dispatch, messageTypes.MESSAGE_ADD_ERROR)
    })
}

export const updateItem = item => dispatch => {
  return api.put(`${url.ITEMS_URL}/${item.id}`, item)
    .then(() => {
      dispatch(actions.updateChangedItems(item))
    })
    .catch(() => {
      updateMessage(dispatch, messageTypes.MESSAGE_UPDATE_ERROR)
    })
}

export const deleteItem = id => dispatch => {
  return api.del(`${url.ITEMS_URL}/${id}`)
    .then((items) => {
      dispatch(actions.removeItem(id))
      updateMessage(dispatch, messageTypes.MESSAGE_REMOVE_SUCCESS)
    })
    .catch(() => {
      updateMessage(dispatch, messageTypes.MESSAGE_REMOVE_ERROR)
    })
}
