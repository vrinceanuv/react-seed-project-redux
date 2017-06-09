import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Home.css';
import {ItemList, ItemForm} from '../Item';
import {loadItems, createItem, deleteItem} from '../../libs/ajax';
import {generateId} from '../../libs/utils';
import {itemActions, messageActions, currentItemActions, loaderActions} from '../../actions';

class Home extends Component {
  componentDidMount() {
      loadItems()
        .then(items => {
          this.props.updateItems(items)
          this.props.updateLoader(true)
        })
  }

  handleRemove = (id, event) => {
    event.preventDefault()

    const succesMessage = {'type': 'success', 'text': 'Item removed!'}
    const errorMessage = {'type': 'error', 'text': 'There was an issue while removing your item!'}


    deleteItem(id)
      .then(() => {
        this.props.removeItem(id)
        this.displayMessage(succesMessage);
      },
      () => { this.displayMessage(errorMessage) }
    )
  }

  displayMessage = (message) => {
    const clearMessage = {'type': null, 'message': ''}

    this.props.updateMessage(message)
    setTimeout(() => this.props.updateMessage(clearMessage), 2500)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newId = generateId()
    const newItem = {id: newId, name: this.props.currentItem}
    const succesMessage = {'type': 'success', 'text': 'Item added!'}
    const errorMessage = {'type': 'error', 'text': 'There was an issue adding your item!'}

    createItem(newItem)
      .then(
        () => {
          this.props.addItem(newItem)
          this.displayMessage(succesMessage);
        },
        () => { this.displayMessage(errorMessage) }
      )
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()

    const errorMessage = {'type': 'error', 'text': 'Please enter item name'}
    this.displayMessage(errorMessage);
  }

  handleInputValue = (event) => {
    this.props.updateCurrentItem(event.currentTarget.value)
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
            {this.props.message &&
              <span className={this.props.message.type + '-message'}>{this.props.message.text}</span>
            }
            <ItemForm
              handleInputValue={this.handleInputValue}
              handleSubmit={submitHandler}
              currentItem={this.props.currentItem}/>

            <ItemList items={this.props.items}
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
    message: state.message
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(itemActions.addItem(item)),
    removeItem: id => dispatch(itemActions.removeItem(id)),
    updateCurrentItem: value => dispatch(currentItemActions.updateCurrentItem(value)),
    updateItems: items => dispatch(itemActions.updateItems(items)),
    updateLoader: loaded => dispatch(loaderActions.updateLoader(loaded)),
    updateMessage: message => dispatch(messageActions.updateMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
