import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {ItemForm} from '../ItemForm';

const setup = () => {
  let props = {
    handleSubmit: () => {},
    handleInputValue: () => {},
    currentItem: ''
  };

  const renderer = new ReactShallowRenderer();
  renderer.render(<ItemForm {...props}/>);

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

describe('Testing ItemForm stateless component markup', () => {
  const { output } = setup();

  it('ItemForm should Render and to be a form element', () => {
    expect(output.type).toBe('form');
  })

  it('ItemForm children should be a input element', () => {
    let input = output.props.children;

    expect(input.type).toBe('input');
  })

  it('ItemForm input should be type text', () => {
    let inputProps = output.props.children.props;

    expect(inputProps.type).toBe('text');
  })
});
