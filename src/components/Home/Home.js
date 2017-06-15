import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './Home.css';
import {ItemList, ItemForm} from '../Item';
import {createItem, updateItem, deleteItem} from '../../libs/ajax';
import {generateId} from '../../libs/utils';
import * as actions from '../../actions';
import * as messageTypes from '../../constants/messageTypes';

export class Home extends Component {
  handleSubmit = (event) => {
    event.preventDefault()

    const newId = generateId()
    const newItem = {id: newId, name: this.props.currentItem, editable: false}

    createItem(newItem)
      .then(
        () => {
          this.props.actions.addItem(newItem)
          this.displayMessage(messageTypes.MESSAGE_ADD_SUCCESS);
          this.props.actions.updateCurrentItem('')
        },
        () => { this.displayMessage(messageTypes.MESSAGE_ADD_ERROR) }
      )
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()

    this.displayMessage(messageTypes.MESSAGE_EMPTY_ITEM_ERROR)
  }

  handleRemove = (id, event) => {
    event.preventDefault()

    deleteItem(id)
      .then(() => {
        this.props.actions.removeItem(id)
        this.displayMessage(messageTypes.MESSAGE_REMOVE_SUCCESS)
      },
      () => { this.displayMessage(messageTypes.MESSAGE_REMOVE_ERROR) }
    )
  }

  handleEditable = (id) => {
    this.props.actions.makeItemEditable(id)
  }

  handleEditChanges = (item, event) => {
    const itemValue = event.currentTarget.value;
    const updatedItem = Object.assign(item, {name: itemValue})

    this.props.actions.updateEditableItem(updatedItem)
  }

  handleSubmitChanges = (event) => {
    event.preventDefault()
    updateItem(this.props.editableItem)
      .then(() => {
        this.props.actions.updateChangedItems(this.props.editableItem)
      })

  }

  handleInputValue = (event) => {
    this.props.actions.updateCurrentItem(event.currentTarget.value)
  }

  displayMessage = (message) => {
    this.props.actions.updateMessage(message)
    setTimeout(() => this.props.actions.updateMessage(messageTypes.MESSAGE_EMPTY), 2500)
  }

  render() {
    const submitHandler = this.props.currentItem ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        {!this.props.loaded &&
          <div className="loader">Loading</div>
        }

        {this.props.loaded &&
          <div className="Item-App">
            {this.props.message && this.props.message.type &&
              <span className={this.props.message.type + '-message'}>{this.props.message.text}</span>
            }
            <ItemForm
              handleInputValue={this.handleInputValue}
              handleSubmit={submitHandler}
              currentItem={this.props.currentItem}/>

            <ItemList items={this.props.items}
              handleEditable={this.handleEditable}
              handleEditChanges={this.handleEditChanges}
              handleSubmitChanges={this.handleSubmitChanges}
              handleRemove={this.handleRemove}/>

          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    currentItem: state.currentItem,
    loaded: state.loaded,
    message: state.message,
    editableItem: state.editableItem
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
