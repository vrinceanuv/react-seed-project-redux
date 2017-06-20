import React from 'react';
import PropTypes from 'prop-types';
import {ItemDisplay} from './ItemDisplay';
import './Item.css'

export const ItemList = (props) => {
  return (
    <div className="Item-List">
      <ul>
        {props.items.map( (item, index) =>
          <ItemDisplay key={index} {...item} {...props} />
        )}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}
