import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';

const setup = (loaded) => {
  let props = {
    items: [],
    currentItem: '',
    loaded: loaded
  };

  return shallow(<Home {...props}/>);
}

describe('Testing Home component markup when data is not loaded', () => {
  const wrapper = setup(false);
  const loader = wrapper.find('.loader');
  const app = wrapper.find('.Item-App');

  it('should Render and to be a div element', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have the class `App`', () => {
    expect(wrapper.node.props.className).toBe('App');
  })

  it('should have a loader', () => {
    expect(loader.length).toBe(1);
  })

  it('should not have the app container as children', () => {
    expect(app.length).toBe(0);
  })

  it('should have a loader with class `loader`', () => {
    expect(loader.node.props.className).toBe('loader');
  })
});

describe('Testing Home component markup when data is loaded', () => {
  const wrapper = setup(true);
  const loader = wrapper.find('.loader');
  const app = wrapper.find('.Item-App')

  it('should Render and to be a div element', () => {
    expect(wrapper.node.type).toBe('div');
  })

  it('should have the class `App`', () => {
    expect(wrapper.node.props.className).toBe('App');
  })

  it('should not have a loader', () => {
    expect(loader.length).toBe(0);
  })

  it('should have the app container as children', () => {
    expect(app.length).toBe(1);
  })

  it('should have a children with class `Item-App`', () => {
    expect(app.node.props.className).toBe('Item-App');
  })
});
