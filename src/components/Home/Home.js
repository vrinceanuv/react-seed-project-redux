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
          this.props.dispatch(itemActions.updateItems(items))
          this.props.dispatch(loaderActions.updateLoader(items))
        })
  }

  handleRemove = (id, event) => {
    event.preventDefault()

    const succesMessage = {'type': 'success', 'text': 'Item removed!'}
    const errorMessage = {'type': 'error', 'text': 'There was an issue while removing your item!'}


    deleteItem(id)
      .then(() => {
        this.props.dispatch(itemActions.removeItem(id))
        this.displayMessage(succesMessage);
      },
      () => { this.displayMessage(errorMessage) }
    )
  }

  displayMessage = (message) => {
    const clearMessage = {'type': null, 'message': ''}

    this.props.dispatch(messageActions.updateMessage(message))
    setTimeout(() => this.props.dispatch(messageActions.updateMessage(clearMessage)), 2500)
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
          this.props.dispatch(itemActions.addItem(newItem))
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
    this.props.dispatch(currentItemActions.updateCurrentItem(event.currentTarget.value))
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

function mapStateToProps (state, ownProps) {
  return {
    items: state.items,
    currentItem: state.currentItem,
    loaded: state.loaded,
    message: state.message
  };
}

export default connect(mapStateToProps)(Home);
