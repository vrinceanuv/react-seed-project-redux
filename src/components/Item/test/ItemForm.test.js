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

  it('ItemForm should Render and to be a form element', () => {
    expect(wrapper.node.type).toBe('form');
  })

  it('ItemForm children should be a input element', () => {
    expect(wrapper.find('input').length).toBe(1);
  })

  it('ItemForm input should be type text', () => {
    expect(wrapper.find('input').node.props.type).toBe('text');
  })
});
