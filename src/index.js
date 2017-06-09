import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import {Header} from './components/Header';
import './index.css';
// Import routing components
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header title="Welcome to React"/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
