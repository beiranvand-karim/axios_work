import React, { Component } from 'react';
import './App.scss';
import Home from './container/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
  }
}

export default App;
