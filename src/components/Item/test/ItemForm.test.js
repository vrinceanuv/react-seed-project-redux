import React from 'react';
import {shallow} from 'enzyme';
import {ItemForm} from '../ItemForm';

const setup = () => {
  let props = {
    handleSubmit: () => {},
    handleInputValue: () => {},
    currentItem: ''
  };

  return shallow(<ItemForm {...props}/>);
}

describe('Testing ItemForm stateless component markup', () => {
  const wrapper = setup();

  it('should Render and should be a form element', () => {
    expect(wrapper.node.type).toBe('form');
  })

  it('should have a children which is a input element', () => {
    expect(wrapper.find('input').length).toBe(1);
  })

  it('should have a children(input) that should be of type text', () => {
    expect(wrapper.find('input').node.props.type).toBe('text');
  })
});
