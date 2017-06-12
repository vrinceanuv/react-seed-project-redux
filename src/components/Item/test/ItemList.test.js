import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {ItemList} from '../ItemList';

const setup = () => {
  let props = {
    items: [
      {
        "id": 1,
        "name": "Setup React Project"
      }
    ],
    handleRemove: () => {}
  };

  const renderer = new ReactShallowRenderer();
  renderer.render(<ItemList {...props}/>);

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}
describe('Testing ItemList stateless component markup', () => {
  const { output } = setup();

  it('ItemList should Render and should be a div', () => {
    expect(output.type).toBe('div');
  })

  it('ItemList should have class: Item-List', () => {
    expect(output.props.className).toBe('Item-List');
  })

  it('ItemList children should be ul', () => {
    let ul = output.props.children;

    expect(ul.type).toBe('ul');
  })

});
