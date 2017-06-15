import * as actions from '../actions';

// The url to your API server
const baseURL = 'http://localhost:8080/items'

export const loadItems = () => {
  return function (dispatch) {
    return fetch(baseURL)
      .then(items => items.json())
      .then(items => {
        dispatch(actions.updateItems(items))
        dispatch(actions.updateLoader(true))
      })
  }
}

export const createItem = (item) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then(response => response.json())
}

export const updateItem = (item) => {
  return fetch(`${baseURL}/${item.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then(response => response.json())
}

export const deleteItem = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}
