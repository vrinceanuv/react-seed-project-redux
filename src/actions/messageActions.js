export const updateMessage = (message) => {
  return { type: 'UPDATE_MESSAGE', message };
}

export const updateErrorMessage = (message) => {
  return { type: 'UPDATE_ERROR_MESSAGE', message };
}
