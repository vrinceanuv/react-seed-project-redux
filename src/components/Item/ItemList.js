import React from 'react';
import PropTypes from 'prop-types';
import {ItemDisplay} from './ItemDisplay';
import './Item.css'

export const ItemList = (props) => {
  return (
    <div className="Item-List">
      <ul>
        {props.items.map( (item, index) =>
          <ItemDisplay key={index} {...item}
            handleEditable={props.handleEditable}
            handleEditChanges={props.handleEditChanges}
            handleSubmitChanges={props.handleSubmitChanges}
            handleRemove={props.handleRemove} />
        )}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}
