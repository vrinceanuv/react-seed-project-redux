// The url to your API server
const baseURL = 'http://localhost:8080/items'

export const loadItems = () => {
  return fetch(baseURL)
    .then(response => response.json())
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

export const deleteItem = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}
