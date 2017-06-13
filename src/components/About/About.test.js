import React from 'react';
import {shallow} from 'enzyme';
import {About} from './About';

const setup = () => {
  return shallow(<About />);
}

describe('NotFound', () => {
  const wrapper = setup();

  it('should render and be a div', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have class `About`', () => {
    expect(wrapper.node.props.className).toBe('About');
  })

  it('should have a 2 children', () => {
    const children = wrapper.node.props.children;
    const expectedChildren = 'This is the about page. The other component!'
    expect(children).toBe(expectedChildren);
  })
});
