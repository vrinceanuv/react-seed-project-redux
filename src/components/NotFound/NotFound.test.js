import React from 'react';
import {shallow} from 'enzyme';
import {NotFound} from './NotFound';

const setup = () => {
  return shallow(<NotFound />);
}

describe('NotFound', () => {
  const wrapper = setup();

  it('should render and be a div', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have class `NotFound`', () => {
    expect(wrapper.node.props.className).toBe('NotFound');
  })

  it('should have a 2 children', () => {
    expect(wrapper.node.props.children.length).toBe(2);
  })
});
