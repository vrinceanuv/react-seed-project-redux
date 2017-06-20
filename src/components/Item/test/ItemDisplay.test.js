import React from 'react';
import {shallow} from 'enzyme';
import {ItemDisplay} from '../ItemDisplay';

const setup = (edit) => {
  let props = {
    handleRemove: () => {},
    handleEditable: () => true,
    handleCancel: () => true,
    handleEditChanges: () => true,
    id: 0,
    name: 'abc',
    editable: edit
  };

  return shallow(<ItemDisplay {...props}/>);
}

describe('Testing ItemDisplay stateless component markup', () => {
  describe('when not editable', () => {
    const wrapper = setup(false);

    it('should Render and to be a li element', () => {
      expect(wrapper.node.type).toBe('li');
    })

    it('should have a children which is a span element', () => {
      expect(wrapper.find('span').length).toBe(2);
    })

    it('should have a second children which is a span element and has the text `abc`', () => {
      expect(wrapper.find('span').last().node.props.onClick()).toBe(true);
      expect(wrapper.find('span').last().node.props.children).toBe('abc');
    })

    it('should have a children(span) with class: delete-item', () => {
      expect(wrapper.find('span').first().node.props.className).toBe('delete-item');
    })
  })

  describe('when editable', () => {
    const wrapper = setup(true);

    it('should Render and to be a li element', () => {
      expect(wrapper.node.type).toBe('li');
    })

    it('should have a children which is a form element', () => {
      expect(wrapper.find('form').length).toBe(1);
    })

    it('should have a children which is a input element', () => {
      expect(wrapper.find('input').length).toBe(1);
      expect(wrapper.find('input').node.props.onKeyDown()).toBe(true);
      expect(wrapper.find('input').node.props.onChange()).toBe(true);
    })
  })
});
