import React from 'react';
import {shallow} from 'enzyme';
import {Navigation} from './Navigation';

const setup = () => {
  return shallow(<Navigation />);
}

describe('Navigation', () => {
  const wrapper = setup();
  const ul = wrapper.node.props.children;

  it('should render and be a div', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have class `Navigation`', () => {
    expect(wrapper.node.props.className).toBe('Navigation');
  })

  it('should have a `ul` children', () => {
    expect(ul.type).toBe('ul');
  })

  it('should have a `ul` with 2 chilren', () => {
    expect(ul.props.children.length).toBe(2);
  })
});
