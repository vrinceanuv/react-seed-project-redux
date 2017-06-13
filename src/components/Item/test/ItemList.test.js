import React from 'react';
import {shallow} from 'enzyme';
import {ItemList} from '../ItemList';

const setup = () => {
  let props = {
    items: [
      {
        "id": 1,
        "name": "Setup React Project"
      }
    ],
    handleRemove: () => {}
  };

  return shallow(<ItemList {...props}/>);
}

describe('Testing ItemList stateless component markup', () => {
  const wrapper = setup();

  it('should Render and should be a div', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have class: Item-List', () => {
    expect(wrapper.node.props.className).toBe('Item-List');
  })

  it('should have a children which is a ul element', () => {
    expect(wrapper.find('ul').length).toBe(1);
  })

});
