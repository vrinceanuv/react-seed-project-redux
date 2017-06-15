import React from 'react';
import PropTypes from 'prop-types';
import {partial} from '../../libs/utils';

export const ItemDisplay = (props) => {
  const remove = partial(props.handleRemove, props.id)
  const item = {
    id: props.id,
    name: props.name,
    editable: props.editable
  }

  return (
    <li>
      {!item.editable && <div>
        <span className="delete-item">
          <a href="#" onClick={remove}>X</a>
        </span>
        <span onClick={() => props.handleEditable(item.id)}>{item.name}</span>
      </div> }

      {item.editable && <form onSubmit={props.handleSubmitChanges}>
        <input type="text" defaultValue={item.name} onChange={(event) => props.handleEditChanges(item, event)}/>
      </form> }
    </li>
  )
}

ItemDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}
