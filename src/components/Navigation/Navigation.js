import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
      </ul>
    </div>
  )
}
