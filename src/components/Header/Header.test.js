import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './Header';

const setup = () => {
  let props = {
    title: 'Welcome to React'
  };

  return shallow(<Header {...props}/>);
}

describe('Header', () => {
  const wrapper = setup();

  it('should render and be a div', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have class `App-header`', () => {
    expect(wrapper.node.props.className).toBe('App-header');
  })

  it('should have 3 children', () => {
    expect(wrapper.node.props.children.length).toBe(3);
  })
});
