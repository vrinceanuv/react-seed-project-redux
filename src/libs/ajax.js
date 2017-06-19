import api from 'superagent-wrapper';
import * as actions from '../actions';
import * as url from '../constants/apiConstants'

export const loadItems = () => {
  return function (dispatch) {
    return api.get(url.ITEMS_URL)
      .then(items => {
        dispatch(actions.updateItems(items))
        dispatch(actions.updateLoader(true))
      })
  }
}

export const createItem = (item) => {
  return api.post(url.ITEMS_URL, item)
}

export const updateItem = (item) => {
  return api.put(`${url.ITEMS_URL}/${item.id}`, item)
}

export const deleteItem = (id) => {
  return api.del(`${url.ITEMS_URL}/${id}`)
}
