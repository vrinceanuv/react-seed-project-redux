export const addItem = (item) => {
  return { type: 'ADD_ITEM', item };
}

export const removeItem = (id) => {
  return { type: 'REMOVE_ITEM', id }
}

export const updateItems = (items) => {
  return { type: 'UPDATE_DATA', items }
}
