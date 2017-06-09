import React from 'react';
import PropTypes from 'prop-types';
import {ItemDisplay} from './ItemDisplay';

export const ItemList = (props) => {
  console.log(props);
  return (
    <div className="Item-List">
      <ul>
        {props.items.map( (item, index) =>
          <ItemDisplay key={index} {...item} handleRemove={props.handleRemove} />
        )}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}
