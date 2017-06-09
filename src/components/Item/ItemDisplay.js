import React from 'react';
import PropTypes from 'prop-types';
import {partial} from '../../libs/utils';

export const ItemDisplay = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={handleRemove}>X</a>
      </span>
      {props.name}
    </li>
  )
}

ItemDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}
