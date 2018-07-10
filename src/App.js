import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './containers/Header';
import Dashboard from './containers/Dashboard';

import store from "./store";
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Dashboard />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
