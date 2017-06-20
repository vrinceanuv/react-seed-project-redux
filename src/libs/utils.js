import * as actions from '../actions/messageActions';
import * as messageTypes from '../constants/messageTypes'

export const generateId = () => Math.floor(Math.random() * 100000)
export const partial = (fn, ...args) => fn.bind(null, ...args)

export const updateMessage = (dispatch, message) => {
  dispatch(actions.updateMessage(message))
  setTimeout(() => dispatch(actions.updateMessage(messageTypes.MESSAGE_EMPTY)), 2500)
}
