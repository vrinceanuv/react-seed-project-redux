import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {ItemDisplay} from '../ItemDisplay';

const setup = () => {
  let props = {
    handleRemove: () => {},
    id: 0,
    name: ''
  };

  const renderer = new ReactShallowRenderer();
  renderer.render(<ItemDisplay {...props}/>);

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

describe('Testing ItemDisplay stateless component markup', () => {
  const { output } = setup();

  it('ItemDisplay should Render and to be a li element', () => {
    expect(output.type).toBe('li');
  })

  it('ItemDisplay children should be a span element', () => {
    const children = output.props.children[0];
    expect(children.type).toBe('span');
  })

  it('ItemDisplay children(span) should have class: delete-item', () => {
    const children = output.props.children[0];
    expect(children.props.className).toBe('delete-item');
  })
});
