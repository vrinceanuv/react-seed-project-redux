import React from 'react';
import logo from '../../logo.svg';
import {Navigation} from '../Navigation';
import './Header.css';

export const Header = (props) => {
  return (
    <div className="App-header">
      <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{props.title}</h2>
    </div>
  )
}
