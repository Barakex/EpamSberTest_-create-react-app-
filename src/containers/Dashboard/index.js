import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Episodes from './Episodes';
import Search from './Search';


class Dashboard extends Component {
    render() {
      return (
          <div className="dashboard">
            <Route exact path="/" component={Search} />
            <Route path="/episodes/:id" component={Episodes} />
          </div>
      )
    }
}



export default Dashboard;
