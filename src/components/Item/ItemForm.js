import React from 'react';
import PropTypes from 'prop-types';

export const ItemForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
        onChange={props.handleInputValue}
        value={props.currentItem}/>
  </form>
)

ItemForm.propTypes = {
  currentItem: PropTypes.string.isRequired,
  handleInputValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
