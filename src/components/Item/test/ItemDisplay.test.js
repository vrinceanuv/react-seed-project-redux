import React from 'react';
import {shallow} from 'enzyme';
import {ItemDisplay} from '../ItemDisplay';

const setup = () => {
  let props = {
    handleRemove: () => {},
    id: 0,
    name: ''
  };

  return shallow(<ItemDisplay {...props}/>);
}

describe('Testing ItemDisplay stateless component markup', () => {
  const wrapper = setup();

  it('ItemDisplay should Render and to be a li element', () => {
    expect(wrapper.node.type).toBe('li');
  })

  it('ItemDisplay children should be a span element', () => {
    expect(wrapper.find('span').length).toBe(1);
  })

  it('ItemDisplay children(span) should have class: delete-item', () => {
    expect(wrapper.find('span').node.props.className).toBe('delete-item');
  })
});
