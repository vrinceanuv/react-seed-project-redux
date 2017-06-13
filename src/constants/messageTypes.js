// Types of the messages
const MESSAGE_SUCCESS_TYPE = 'success';
const MESSAGE_ERROR_TYPE = 'error';
const MESSAGE_EMPTY_TYPE = null;

// Item add messages
export const MESSAGE_ADD_SUCCESS = {type: MESSAGE_SUCCESS_TYPE, text: 'Item added!'};
export const MESSAGE_ADD_ERROR = {type: MESSAGE_ERROR_TYPE, text: 'There was an issue while adding your item!'};

// Item removed messages
export const MESSAGE_REMOVE_SUCCESS = {type: MESSAGE_SUCCESS_TYPE, text: 'Item removed!'};
export const MESSAGE_REMOVE_ERROR = {type: MESSAGE_ERROR_TYPE, text: 'There was an issue while removing your item!'};

// Empty item validation
export const MESSAGE_EMPTY_ITEM_ERROR = {type: MESSAGE_ERROR_TYPE, text: 'Please enter item name'}

// Empty message
export const MESSAGE_EMPTY = {type: MESSAGE_EMPTY_TYPE, text: ''};
